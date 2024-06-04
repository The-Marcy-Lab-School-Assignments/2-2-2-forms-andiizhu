/** GENERAL FEEDBACK:
 *
 */

const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.target;
  const username = form.username.value;
  const codingLevel = form.codingLevel.value;
  const location = form.location.value;
  const didLikeAssignment = form.didLikeAssignment.checked;

  document.querySelector("#results-username").textContent = username;
  document.querySelector("#results-coding-level").textContent = codingLevel;
  document.querySelector("#results-location").textContent = location;
  const resultLikeAssignment = document.querySelector(
    "#results-did-like-assignment"
  );
  if (didLikeAssignment) {
    resultLikeAssignment.textContent = "Yes";
  } else resultLikeAssignment.textContent = "No";

  form.reset();
};

document.querySelector("form").addEventListener("submit", handleSubmit);
