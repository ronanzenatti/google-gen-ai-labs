document.getElementById("supportForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const studentName = document.getElementById("studentName").value.toUpperCase();
  const labName = document.getElementById("labName").value.toUpperCase();

  const emailTemplate = `Hello, my name is <b>${studentName}</b>. I'm from Brazil, participating in a program called "Google Cloud Career Launchpad - LatAm." As part of this program, I'm completing the course series for "Google Cloud GenAI Learning Paths". My attempts for laboratory <b>${labName}</b> have exceeded the maximum quota. Could you please provide me with more attempts for this laboratory so I can continue with the course? Thank you in advance.`;

  document.getElementById("generatedText").innerHTML = emailTemplate;

  const formModal = bootstrap.Modal.getInstance(
    document.getElementById("formModal")
  );
  formModal.hide();

  const resultModal = new bootstrap.Modal(
    document.getElementById("resultModal")
  );
  resultModal.show();
});

document.getElementById("copyButton").addEventListener("click", function () {
  const textToCopy = document.getElementById("generatedText").textContent;
  navigator.clipboard.writeText(textToCopy).then(function () {
    const copyButton = document.getElementById("copyButton");
    copyButton.innerHTML = '<i class="bi bi-check"></i> Copied!';
    setTimeout(() => {
      copyButton.innerHTML =
        '<i class="bi bi-clipboard"></i> Copy to Clipboard';
    }, 2000);
  });
});
