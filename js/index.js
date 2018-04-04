let numbers = document.querySelectorAll('.num'),
    operations = document.querySelectorAll('.oper'),
    results = document.getElementById('equals'),
    display = document.getElementById('display'),
    MemoryCurrentNumber = 0,
    MemoryNewNumber = false,
    MemoryPendingOper = '';
for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    num.addEventListener('click', function(e) {
        numberPress(e.target.textContent);

    });
}
for (let i = 0; i < operations.length; i++) {
    let oper = operations[i];
    oper.addEventListener('click', function(e) {
        opPress(e.target.textContent);

    });
}
function numberPress(num) {
    if (MemoryNewNumber) {
        display.value = num;
        MemoryNewNumber = false;
    }
    else {
        if (display.value === '0') {
            display.value = num;
        }
        else {
            display.value += num;

        }

    };
}
function opPress(oper) {
    let localOperMemory = display.value;

    if (MemoryNewNumber && MemoryPendingOper !== '=') {
        display.value = MemoryCurrentNumber;
    }
    else {
        MemoryNewNumber = true;
        if (MemoryPendingOper === '+') {
            MemoryCurrentNumber += parseFloat(localOperMemory);

        }
        else if (MemoryPendingOper === '-') {
            MemoryCurrentNumber -= parseFloat(localOperMemory);
        }
        else if (MemoryPendingOper === '*') {
            MemoryCurrentNumber *= parseFloat(localOperMemory);
        }
        else if (MemoryPendingOper === '/') {
            MemoryCurrentNumber /= parseFloat(localOperMemory);
        }
        else {
            MemoryCurrentNumber = parseFloat(localOperMemory);
        };
        display.value = MemoryCurrentNumber;
        MemoryPendingOper = oper;
    }
}
