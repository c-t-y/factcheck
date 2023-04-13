// Define the context menu item ID
const CONTEXT_MENU_ID = "repeat-text-context-menu";

// Create the context menu item
chrome.contextMenus.create({
  id: CONTEXT_MENU_ID,
  title: "Fact Check",
  contexts: ["selection"],
});

// Add an event listener for the context menu item
chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === CONTEXT_MENU_ID) {
    const selectedText = info.selectionText;
    // console.log(selectedText);

    // const { Configuration, OpenAIApi } = require("openai");

    // const configuration = new Configuration({
    //   apiKey: "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",
    // });

    // const prompt = `Fact Check: ${selectedText}`;


    // async function getResponse(topic) {
    //   const openai = new OpenAIApi(configuration);
    //   const completion = await openai.createCompletion({
    //     model: "text-davinci-003",
    //     prompt: topic,
    //     max_tokens: 1024,
    //     n: 1,
    //     stop: null,
    //     temperature: 0.7
    //   });
    //   console.log(completion.data.choices[0].text);
    // }
    // getResponse(prompt);
    const apiKey = '...';

    async function callOpenAI(prompt) {
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          prompt: prompt,
          max_tokens: 1024,
          model: "text-davinci-003",
          n: 1,
          stop: null,
          temperature: 1,
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.choices[0].text);
      } else {
        const errorDetails = await response.text();
        throw new Error(`Request failed: ${response.status} ${response.statusText}\n${errorDetails}`);
      }
    }

    callOpenAI(`Fact Check: ${selectedText}`)

  }
});








