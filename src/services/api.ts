export const askQuestion = async (question: string): Promise<{ answer: string}> => {
    const res = await fetch('http://173.249.57.83:8000/api/v1/document/query', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({ question }),
    })

    return res.json();
}