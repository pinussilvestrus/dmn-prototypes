<script>
  import './PropertiesModal.scss';
</script>


<div class="modal" id="modal-1" aria-hidden="true">
  <div class="modal-overlay" tabindex="-1" data-micromodal-close>
    <div class="modal-container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
      <header class="modal-header">
        <p class="modal-title" id="modal-1-title">
          Decision Properties <code>Decision_03absfl</code>
        </p>
        <button class="modal-close" aria-label="Close modal" data-micromodal-close></button>
      </header>
      <main class="modal-content" id="modal-1-content">
        <p>
          Use this <code>properties</code> to execute the Decision on the Camunda Engine. Copy & Paste the following <code>yaml</code> code into a <code>Business Rule Task</code> properties section.
        </p>
        <pre class="yaml-view">
          <code>
implementation:
  decisionRef: Decision_03absfl
  binding: latest
  resultVariable: Score
  inputParameters:
    Employee Skillset: string
    Approval Authority: integer
    Employee: complex
    Claim: complex
    Open Claims: integer
          </code>
        </pre>
        
      </main>
      <footer class="modal-footer">
        <button class="btn btn-modal" data-micromodal-close aria-label="Close this dialog window">Close</button>
      </footer>
    </div>
  </div>
</div>