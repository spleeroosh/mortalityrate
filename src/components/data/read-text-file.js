const readTextFile = async () => { 
    const res = await fetch(`./data.json`);
    if (!res.ok) {
        throw new Error(`Could not fetch` +
          `, received ${res.status}`)
      }
    const data = await res.json();
    return data['Country estimates'];
};

export default readTextFile;