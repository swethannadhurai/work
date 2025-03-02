let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

function addtransaction(){
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const type = document.getElementById("type").value;
    if(!description || isNaN(amount)) return;
    const transact = {id: Date.now(), description, amount, type };
    transactions.push(transact);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    rendertransaction();
    resetFields();
    
}

function resetFields(){
    document.getElementById("description").value= "";
    document.getElementById("amount").value= "";
    document.getElementById("type").value= "income";

}

function rendertransaction(filter ="all"){
    const item = document.getElementById("transaction-list");
    item.innerHTML = '';
    let totalincome =0, totalexpense =0;
    transactions.filter(t => filter === 'all' || t.type === filter).forEach(t => {
        const li = document.createElement('li');
        li.className = `p-2 border rounded-md flex justify-between mt-2 ${t.type === 'income' ? 'bg-green-100' : 'bg-red-100'}`;
        li.innerHTML = `${t.description} - $${t.amount} 
            <button onclick="deleteTransaction(${t.id})" class="text-red-500">X</button>`;
    item.appendChild(li);
    if (t.type === 'income') totalincome += t.amount;
    else totalexpense += t.amount;
   });
    document.getElementById('total-income').innerText = totalincome;
    document.getElementById('total-expense').innerText = totalexpense;
    document.getElementById('net-balance').innerText = totalincome - totalexpense;
}

function deleteTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    localStorage.setItem('transactions', JSON.stringify(transactions));
    rendertransaction();
}

function filterTransactions(filter) {
    rendertransaction(filter);
}

document.addEventListener('DOMContentLoaded', () => rendertransaction());