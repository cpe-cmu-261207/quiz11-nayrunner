//your code here!
function MinusId(){
    document.addEventListener('DOMContentLoaded',function(){
        document.querySelector('#button-compute').onsubmit = function(){
            const space = document.createElement('tr')
            const sid = document.querySelector('#input-number').value
            const doIt = document.querySelector('#button-compute')

            let calculate = 620610785 - sid

            doIt.append(space)
            doIt.append(calculate)
            doIt.append(space)
            

        }
    })
}