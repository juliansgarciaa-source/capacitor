export function getIdeas() {
  return JSON.parse(localStorage.getItem("ideas")) || [];
}

export function saveIdea(text) {
  const ideas = getIdeas();
  ideas.push({ id: Date.now(), text });
  localStorage.setItem("ideas", JSON.stringify(ideas));
}

export function deleteIdea(id) {
  const ideas = getIdeas().filter(idea => idea.id !== id);
  localStorage.setItem("ideas", JSON.stringify(ideas));
}
