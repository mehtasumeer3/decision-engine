import { keywordMap, Responses } from "../data/Responses";

export function getBiasType(inputText) {
  const text = inputText.toLowerCase();

  for (const keyword of keywordMap.fear) {
    if (text.includes(keyword)) {
      return "fear";
    }
  }

  for (const keyword of keywordMap.growth) {
    if (text.includes(keyword)) {
      return "growth";
    }
  }

  for (const keyword of keywordMap.logic) {
    if (text.includes(keyword)) {
      return "logic";
    }
  }

  return "default";
}

export function getRandomResponse(type) {
  const selectedResponses = Responses[type] || Responses.default;
  const randomIndex = Math.floor(Math.random() * selectedResponses.length);
  return selectedResponses[randomIndex];
}

export function generateDecisionResult(inputText) {
  if (!inputText.trim()) {
    return {
      response: "Please enter a decision first.",
      biasType: "",
    };
  }

  const biasType = getBiasType(inputText);
  const response = getRandomResponse(biasType);

  return {
    response,
    biasType,
  };
}