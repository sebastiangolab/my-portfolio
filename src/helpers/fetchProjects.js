const apiKey = `08f9076720d0825680e558e9de0da8`;

const query = `
    query MyQuery {
        allRealizations(first: "100") {
            title
            link
            image {
                url
            }
            technologies
        }
    }
`;

export const fetchProjects = async (setStateFunction) => {
  if (!setStateFunction) {
    console.error('function fetchProjects need setStateFunction');
    return false;
  }

  try {
    const response = await fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        query: query,
      }),
    });

    const data = await response.json();
    
    setStateFunction(data.data.allRealizations);
  } catch (e) {
    console.log(e);
  }
};
