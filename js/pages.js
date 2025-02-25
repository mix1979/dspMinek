const elements = {
  logoutBtn: document.getElementById("logoutBtn"),
  inboxTable: document.getElementById("inboxTable"),
  sendedTable: document.getElementById("sendedTable"),
  inboxBtn: document.getElementById("inboxBtn"),
  sendedBtn: document.getElementById("sendedBtn"),
  newInboxBtn: document.getElementById("newInboxBtn"),
  newSendedBtn: document.getElementById("newSendedBtn"),
  journalInbox: document.getElementById("journalInbox"),
  journalSended: document.getElementById("journalSended"),
  inboxModal: document.getElementById("inboxModal"),
  sendedModal: document.getElementById("sendedModal"),
  newInboxSuccessBtn: document.getElementById("newInboxSuccessBtn"),
  newSendedSuccessBtn: document.getElementById("newSendedSuccessBtn"),
  newSendedCancelBtn: document.getElementById("newSendedCancelBtn"),
  newInboxCancelBtn: document.getElementById("newInboxCancelBtn"),
  inboxDate: document.getElementById("inboxDate"),
  inboxInboxFrom: document.getElementById("inboxInboxFrom"),
  inboxDateIndexInbox: document.getElementById("inboxDateIndexInbox"),
  inboxDescription: document.getElementById("inboxDescription"),
  inboxEkzNumbers: document.getElementById("inboxEkzNumbers"),
  inboxEkzNum: document.getElementById("inboxEkzNum"),
  inboxLists: document.getElementById("inboxLists"),
  inboxMaker: document.getElementById("inboxMaker"),
  sendedDate: document.getElementById("sendedDate"),
  sendedInboxFrom: document.getElementById("sendedInboxFrom"),
  sendedDateIndexInbox: document.getElementById("sendedDateIndexInbox"),
  sendedDescription: document.getElementById("sendedDescription"),
  sendedEkzNumbers: document.getElementById("sendedEkzNumbers"),
  sendedEkzNum: document.getElementById("sendedEkzNum"),
  sendedLists: document.getElementById("sendedLists"),
  sendedMaker: document.getElementById("sendedMaker"),
};
const logOut = () => {
  sessionStorage.removeItem("auth");
  window.location.href = "/";
};

elements.logoutBtn.addEventListener("click", () => logOut());

const renderInboxTable = async () => {
  let inboxData = [];
  await fetch("https://cute-deserted-bellusaurus.glitch.me/inbox")
    .then((res) => res.json())
    .then((data) => inboxData.push(...data));

  inboxData
    ? inboxData.map((elem) => {
        return elements.inboxTable.insertAdjacentHTML(
          "beforeend",
          `
        <tr class="text-center border">
            <td class="border">${elem.id}</td>
            <td class="border">${elem.date}</td>
            <td class="border">${elem.inboxFrom}</td>
            <td class="border">${elem.dateIndexInbox}</td>
            <td class="border">${elem.description}</td>
            <td class="border">${elem.ekzNumbers}</td>
            <td class="border">${elem.ekzNum}</td>
            <td class="border">${elem.lists}</td>
            <td class="border">${elem.maker}</td>
        </tr>
       `
        );
      })
    : (inboxData = []);
};

const renderSendedTable = async () => {
  let sendedData = [];
  await fetch("https://cute-deserted-bellusaurus.glitch.me/sended")
    .then((res) => res.json())
    .then((data) => sendedData.push(...data));

  sendedData
    ? sendedData.map((elem) => {
        return elements.sendedTable.insertAdjacentHTML(
          "beforeend",
          `
        <tr class="text-center border">
            <td class="border">${elem.id}</td>
            <td class="border">${elem.date}</td>
            <td class="border">${elem.inboxFrom}</td>
            <td class="border">${elem.dateIndexInbox}</td>
            <td class="border">${elem.description}</td>
            <td class="border">${elem.ekzNumbers}</td>
            <td class="border">${elem.ekzNum}</td>
            <td class="border">${elem.lists}</td>
            <td class="border">${elem.maker}</td>
        </tr>
       `
        );
      })
    : (sendedData = []);
};

const showSended = () => {
  elements.journalSended.classList.remove("none");
  elements.journalInbox.classList.add("none");
};

const showInbox = () => {
  elements.journalSended.classList.add("none");
  elements.journalInbox.classList.remove("none");
};

const showInboxModal = () => {
  elements.inboxModal.classList.remove("none");
};
const showSendedModal = () => {
  elements.sendedModal.classList.remove("none");
};

const saveNewInbox = async () => {
  const inboxData = {
    date: elements.inboxDate.value,
    inboxFrom: elements.inboxInboxFrom.value,
    dateIndexInbox: elements.inboxDateIndexInbox.value,
    description: elements.inboxDescription.value,
    ekzNumbers: elements.inboxEkzNumbers.value,
    ekzNum: elements.inboxEkzNum.value,
    lists: elements.inboxLists.value,
    maker: elements.inboxMaker.value,
  };
  await fetch("https://cute-deserted-bellusaurus.glitch.me/inbox/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(inboxData),
  });
  elements.inboxModal.classList.add("none");
  // document.location.reload();
};

const saveNewSended = async () => {
  const sendedData = {
    date: elements.sendedDate.value,
    inboxFrom: elements.sendedInboxFrom.value,
    dateIndexInbox: elements.sendedDateIndexInbox.value,
    description: elements.sendedDescription.value,
    ekzNumbers: elements.sendedEkzNumbers.value,
    ekzNum: elements.sendedEkzNum.value,
    lists: elements.sendedLists.value,
    maker: elements.sendedMaker.value,
  };
  await fetch("https://cute-deserted-bellusaurus.glitch.me/sended/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(sendedData),
  });
  elements.sendedModal.classList.add("none");
  // document.location.reload();
};

window.document.addEventListener("DOMContentLoaded", () => {
  let auth = JSON.parse(sessionStorage.getItem("auth"));
  !auth || auth.login !== "mix1979"
    ? (window.location.href = "/")
    : console.log(auth);

  renderInboxTable();
  renderSendedTable();
});

elements.inboxBtn.addEventListener("click", () => {
  showInbox();
});
elements.sendedBtn.addEventListener("click", () => {
  showSended();
});

elements.newInboxBtn.addEventListener("click", () => {
  showInboxModal();
});
elements.newSendedBtn.addEventListener("click", () => {
  showSendedModal();
});

elements.newInboxSuccessBtn.addEventListener("click", () => {
  saveNewInbox();
});

elements.newSendedSuccessBtn.addEventListener("click", () => {
  saveNewSended();
});

elements.newInboxCancelBtn.addEventListener("click", () => {
  elements.inboxModal.classList.add("none");
});

elements.newSendedCancelBtn.addEventListener("click", () => {
  elements.sendedModal.classList.add("none");
});
