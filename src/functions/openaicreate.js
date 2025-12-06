async function processUserDetails(userDetailsArray) {
  try {
    const openaiKey = import.meta.env.OPENAI_API;

    const prompt = `
You are an AI resume assistant. You will be given an array of user details where each object contains:
- title: the section of the resume
- body: the raw spoken response from the user

Your job is to process each object and return a structured version with:
- title: a concise, professional section title
- description: a polished summary of the body, written in clear, professional resume language
- bulletpoints: an array of key points extracted from the body (as short bullet-point style strings)

Format your output strictly as an array of JSON objects with the fields: title, description, bulletpoints.

Example input:
[
  { "title": "Education", "body": "I studied computer science at MIT and graduated in 2020 with honors" },
  { "title": "Hobbies", "body": "I like playing football, drinking tea with friends, and playing video games" }
]

Example output:
[
  {
    "title": "Education",
    "description": "Bachelor of Science in Computer Science, MIT, Class of 2020, graduated with honors.",
    "bulletpoints": [
      "Studied Computer Science at MIT",
      "Graduated in 2020",
      "Achieved honors"
    ]
  },
  {
    "title": "Hobbies",
    "description": "Enjoys sports, social activities, and gaming.",
    "bulletpoints": [
      "Plays football",
      "Enjoys drinking tea with friends",
      "Plays video games"
    ]
  }
]

If the title is 'Others', it means the user wants to add additional details that will make the resume more appealing. 
- Create a relevant title, description, and bulletpoints for it. 
- One or more objects can be generated from this section if multiple distinct details are included in the body.

Also, sort the objects in the array you return according to the hierarchy of importance:
- Most important: Education, Work Experience, Skills, Projects, Achievements
- Less important: Certifications, Volunteer Experience, Leadership & Extracurriculars, Languages, Hobbies

If the user has included details in a body that belong to a different section, move them to the correct section. 
For example, if the Education body includes hobbies, move them to the Hobbies section.


Note that these three key words 'title','description', and 'bulletpoints' are very crucial and should be maintained and should not be changed to other words like 'heading' or 'summary' or 'points' or 'body'. and their spellings should always be in lowercase.

Now process the following input:
${JSON.stringify(userDetailsArray)}
`;

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer 1234ffshjkfghldfgh`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are an AI assistant that structures resume details into polished, professional output.",
          },
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature: 0.3,
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Error in processUserDetails:", error);
    return null;
  }
}

export { processUserDetails };
