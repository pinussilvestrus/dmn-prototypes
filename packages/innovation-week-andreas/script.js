import "./command-palette.js";
import "./event-handlers.js";
import "./help.js";
import "./context-menu.js";

(function() {
  "use strict";

  var table = document.querySelector("table");
  var store = {};

  const KEY_MAPPINGS = {
    ArrowRight: "insertinputright",
    ArrowLeft: "insertinputleft",
    ArrowDown: "insertrulebelow",
    ArrowUp: "insertruleabove",
    r: "deleterule",
    i: "deleteinput"
  };

  function handleKeyPress(evt) {
    if (isCommandPaletteOpen()) {
      return;
    }

    if (evt.metaKey) {
      store.isMetaKeyEnabled = true;
    }

    if (evt.key == "Escape") {
      closeEditing(false);
    } else if (evt.key == "Enter") {
      handleEnter(evt);
    } else if (evt.key == "Backspace") {
      clearCell();
    } else if (
      ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"].includes(evt.key)
    ) {
      if (evt.metaKey) {
        window.dispatchEvent(new Event(KEY_MAPPINGS[evt.key]));
      } else {
        navigateTo(evt.key);
      }
    } else if (evt.ctrlKey) {
      window.dispatchEvent(new Event(KEY_MAPPINGS[evt.key]));
    }

    // COPY + PASTE
    if (evt.metaKey) {
      if (evt.key == "c") {
        copyValue();
      } else if (evt.key == "v") {
        pasteValue();
      } else if (evt.key == "x") {
        copyValue(true);
      }
    }
  }

  function closeEditing(saveChanges = true) {
    var editing = getCurrentEditing(table);

    if (editing) {
      clearEditing(editing);

      if (!saveChanges) {
        editing.textContent = store.snapshot;

        delete store.snapshot;
      }

      if (editing.textContent == "") {
        editing.textContent = "-";
      }
    }
  }

  function copyValue(cut = false) {
    var active = getCurrentActive(table);

    store.clipbloard = active.textContent;

    if (cut) {
      active.textContent = "-";
    }
  }

  function pasteValue() {
    var active = getCurrentActive(table);

    active.textContent = store.clipbloard;
  }

  function handleEnter(evt) {
    var editing = getCurrentEditing(table);
    var active = getCurrentActive(table);

    if (editing) {
      closeEditing();
    } else if (active) {
      evt.preventDefault();

      enterEditing(active);
    }
  }

  function clearCell() {
    if (getCurrentEditing(table)) {
      return;
    }

    getCurrentActive(table).textContent = "-";
  }

  function enterEditing(element) {
    store.snapshot = element.textContent;

    setEditing(element);

    if (element.textContent == "-") {
      element.textContent = "";
    }
  }

  function handleClick(evt) {
    if (isEditing(evt.target)) {
      return;
    }

    // if (!evt.target.closest("table")) {
    //   removeEditingAttributes();
    //   return;
    // }

    if (evt.target.hasAttribute("data-index")) {
      selectRow(evt.target);
    }

    if (evt.target.tagName == "TH") {
      selectColumn(evt.target);
    }

    if (isClickable(evt.target)) {
      if (!store.isMetaKeyEnabled) {
        removeEditingAttributes();
      }

      setActive(evt.target);
    }
  }

  function selectRow(target) {
    Array.from(target.parentNode.children).forEach(td => {
      setActive(td);
    });
  }

  function selectColumn(target) {
    var index = Array.from(target.parentNode.children).indexOf(target);
    var trs = document.querySelectorAll("tbody tr");

    setActive(target);
    setActive(target.parentNode.nextElementSibling.children[index - 1]);

    Array.from(trs).forEach(function(tr) {
      setActive(tr.children[index]);
    });
  }

  function handleDblClick(evt) {
    if (isClickable(evt.target)) {
      evt.preventDefault();

      enterEditing(evt.target);
    }
  }

  function removeEditingAttributes() {
    var active = getCurrentActive(table);
    var editing = getCurrentActive(table);

    if (active) {
      clearActive(active);
    }

    if (editing) {
      clearEditing(editing);
    }
  }

  function navigateTo(key) {
    if (getCurrentEditing(table)) {
      return;
    }

    if (!getCurrentActive(table)) {
      return;
    }

    var active = getCurrentActive(table);
    var next = null;

    if (key == "ArrowRight") {
      next = active.nextElementSibling;
    } else if (key == "ArrowLeft") {
      next = active.previousElementSibling;
    }

    if (key == "ArrowDown" || key == "ArrowUp") {
      let index = Array.from(active.parentNode.children).indexOf(active);

      if (key == "ArrowDown") {
        if (!active.parentNode.nextElementSibling) {
          return;
        }

        next = active.parentNode.nextElementSibling.children[index];
      } else if (key == "ArrowUp") {
        if (!active.parentNode.previousElementSibling) {
          return;
        }

        next = active.parentNode.previousElementSibling.children[index];
      }
    }

    if (isClickable(next)) {
      setActive(next);
      clearActive(active);
    }
  }

  window.addEventListener("keydown", handleKeyPress);
  window.addEventListener("keyup", () => (store.isMetaKeyEnabled = false));
  window.addEventListener("click", handleClick);
  window.addEventListener("dblclick", handleDblClick);
  window.addEventListener("contextmenu", handleClick);
})();

/******************* HELPERS *************************/
function isClickable(element) {
  return element && element.hasAttribute("data-clickable");
}

function isEditing(element) {
  return element.hasAttribute("data-active");
}

function getCurrentEditing(table) {
  return table.querySelector("[contenteditable]:not(span)");
}

function getCurrentActive(table) {
  return table.querySelector("[data-active]");
}

function setActive(element) {
  element.setAttribute("data-active", true);
}

function clearActive(element) {
  element.removeAttribute("data-active");
}

function setEditing(element) {
  element.setAttribute("contenteditable", true);
  element.focus();
}

function clearEditing(element) {
  element.removeAttribute("contenteditable");
}

function isCommandPaletteOpen() {
  return window.__commandPaletteIsOpen;
}
