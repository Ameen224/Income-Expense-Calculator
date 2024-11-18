
let total=0;
let expencetotal=0;
let myChart;

 
 
 function add(){

    let category=document.getElementById("category1").value;
    let  income=document.getElementById("income1").value; 
    let income1=parseInt(income);
    let total1=document.getElementById("total1")
    
    
    if(category==""||isNaN(income1) || income1 <= 0){
        alert("Please enter valid values for category and income.");
        return;
    }

   let table=document.getElementById("tableincome")
   let newRow=table.insertRow();
   let cellCategory = newRow.insertCell(0);   
   let cellExpense = newRow.insertCell(1);
    
   cellCategory.innerHTML=category;
   cellExpense.innerHTML=income1;


    total+=income1;
    total1.innerHTML=total;
    
    balance();
    updateChart();

   document.getElementById("category1").value="";
   document.getElementById("income1").value="";


   
 }










 function expense(){
    let category2=document.getElementById("category2").value;
    let expense=document.getElementById("expense1").value;
    let expense2=parseInt(expense);
    let total=document.getElementById("total2")


    if(category2==""||isNaN(expense2)||expense2<=0){
        alert("complete the form");
        return;
    }
    let  table1=document.getElementById("col2table")
    let  newrow=table1.insertRow();
    let  cellCategory2=newrow.insertCell(0);
    let  cellExpense2=newrow.insertCell(1);


    cellCategory2.innerHTML=category2;
    cellExpense2.innerHTML=expense2;
    

    expencetotal+=expense2
    total.innerHTML=expencetotal

    balance();
    updateChart();

    document.getElementById("category2").value="";
    document.getElementById("expense1").value="";

    
    
 }


 function balance(){
    let balance1=document.getElementById("balance")
   let  balance=total-expencetotal
    balance1.innerHTML=balance
    
 }



 function updateChart() {
    // Destroy the existing chart if it exists
    if (myChart) {
      myChart.destroy();
    }
  
    const ctx = document.getElementById('myChart');
  
    myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['income', 'expense', 'balance'],
        datasets: [{
          label: '# of Votes',
          data: [total, expencetotal, total - expencetotal],
          borderWidth: 1,
          backgroundColor: ['green', 'red', 'blue'],
        }]
      },
      options: {
        // You can add more options here if needed
      }
    });
  }
  updateChart()
