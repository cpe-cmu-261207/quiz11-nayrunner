//your code here!
function MinusId(){
    document.addEventListener('DOMContentLoaded',function(){
        document.querySelector('#button-compute').onsubmit = function(){
            const space = document.createElement('tr')
            const sid = document.createElement('tr')
            const calculate = document.createElement('tr')


            sid.innerHTML = document.querySelector('#input-number').value
            const doIt = document.querySelector('#button-compute').onsubmit

            calculate.innerHTML = 620610785 - sid
            console.log(calculate)


            doIt.append(space)
            doIt.append(calculate)
            doIt.append(space)
            

        }
    })
}