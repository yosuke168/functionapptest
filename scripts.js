const apiUrl =
    "https://your-function-app.azurewebsites.net/api/documents";

document
    .getElementById("btnLoad")
    .addEventListener("click", loadDocuments);

async function loadDocuments() {

    const message =
        document.getElementById("message");

    const list =
        document.getElementById("documentList");

    try {

        message.innerText = "取得中...";

        list.innerHTML = "";

        const response =
            await fetch(apiUrl);

        if (!response.ok) {
            throw new Error(
                `HTTP Error ${response.status}`
            );
        }

        const documents =
            await response.json();

        documents.forEach(doc => {

            const li =
                document.createElement("li");

            li.textContent =
                doc.fileName;

            list.appendChild(li);
        });

        message.innerText =
            `取得件数：${documents.length}`;

    }
    catch (error) {

        console.error(error);

        message.innerText =
            "取得に失敗しました";
    }
}