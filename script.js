let primaryPlay = 'X';
const clear = '';

function add(row) {

    let place = document.getElementById(row);
    let opc_text = document.getElementById('op');
    let fundo = document.getElementById('body');
    
    if (place.textContent === '') {
        place.textContent = primaryPlay;
        primaryPlay = (primaryPlay === 'X') ? 'O' : 'X'; 
    }
    
    if (primaryPlay == 'O') {
        opc_text.innerHTML = "O";
        opc_text.style.color = "blue";
        fundo.style.backgroundColor = "rgba(0,0,255,0.5)";
        opc_text.style.color = "blue";
    }else {
        opc_text.innerHTML = "X";
        fundo.style.backgroundColor = "rgba(255,0,0,0.5)";
        opc_text.style.color = "red";
    }

    if (place.textContent == 'X') {
        place.style.color = "red";
    }else{
        place.style.color = 'blue';
    }

    let win_text = document.getElementById('win'); 
    let center_results = document.getElementById('center-results'); 
    let results_div = document.getElementById('results-game'); 

    let top_left = document.getElementById('top-left');
    let top_center = document.getElementById('top-center');
    let top_right = document.getElementById('top-right');

    let middle_left = document.getElementById('middle-left');
    let middle_center = document.getElementById('middle-center');
    let middle_right = document.getElementById('middle-right');

    let low_left = document.getElementById('low-left');
    let low_center = document.getElementById('low-center');
    let low_right = document.getElementById('low-right');

    // ========== Funcao para Validar Vitoria de X ============

    function win_x() {
        win_text.innerHTML = "X venceu";
        center_results.style.display = "block";
        results_div.style.width = "100%";
        results_div.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
        document.getElementById('body').style.backgroundColor = "rgb(240,240,240)";
    } 

    // ========== Funcao para Validar Vitoria de O ============

    function win_o() {
        win_text.innerHTML = "O venceu";
        center_results.style.display = "block";
        results_div.style.width = "100%";
        results_div.style.backgroundColor = "rgba(0, 0, 255, 0.5)";
        document.getElementById('body').style.backgroundColor = "rgb(240,240,240)";
    } 

    // ========== Funcao para Validar Empate ============

    function draw() {
        win_text.innerHTML = "Empate";
        center_results.style.display = "block";
        results_div.style.width = "100%";
        results_div.style.backgroundColor = "rgba(0, 255, 0, 0.5)";
        document.getElementById('body').style.backgroundColor = "rgb(240,240,240)";
    } 

    // ================= Verificar Vitoria X =================

    // Horizontais
    if (top_right.textContent == 'X' && top_center.textContent == 'X' && top_left.textContent == 'X') {
        win_x();
    }else if (middle_right.textContent == 'X' && middle_center.textContent == 'X' && middle_left.textContent == 'X') {
        win_x();
    }else if (low_right.textContent == 'X' && low_center.textContent == 'X' && low_left.textContent == 'X') {
        win_x();
    }
    // verticais
    else if (top_right.textContent == 'X' && low_right.textContent == 'X' && middle_right.textContent == 'X') {
        win_x();
    }else if (top_center.textContent == 'X' && low_center.textContent == 'X' && middle_center.textContent == 'X') {
        win_x();
    }else if (top_left.textContent == 'X' && low_left.textContent == 'X' && middle_left.textContent == 'X') {
        win_x();
    }
    // Diagonias
    else if (top_left.textContent == 'X' && low_right.textContent == 'X' && middle_center.textContent == 'X') {
        win_x();
    }else if (top_right.textContent == 'X' && low_left.textContent == 'X' && middle_center.textContent == 'X') {
        win_x();
    }

    // ================= Verificar Vitoria O =================

    // Horizontais
    else if (top_right.textContent == 'O' && top_center.textContent == 'O' && top_left.textContent == 'O') {
        win_o();
    }else if (middle_right.textContent == 'O' && middle_center.textContent == 'O' && middle_left.textContent == 'O') {
        win_o();
    }else if (low_right.textContent == 'O' && low_center.textContent == 'O' && low_left.textContent == 'O') {
        win_o();
    }
    // verticais
    else if (top_right.textContent == 'O' && low_right.textContent == 'O' && middle_right.textContent == 'O') {
        win_o();
    }else if (top_center.textContent == 'O' && low_center.textContent == 'O' && middle_center.textContent == 'O') {
        win_o();
    }else if (top_left.textContent == 'O' && low_left.textContent == 'O' && middle_left.textContent == 'O') {
        win_o();
    }
    // Diagonias
    else if (top_left.textContent == 'O' && low_right.textContent == 'O' && middle_center.textContent == 'O') {
        win_o();
    }else if (top_right.textContent == 'O' && low_left.textContent == 'O' && middle_center.textContent == 'O') {
        win_o();
    }else if (top_left.textContent != '' && top_center.textContent != '' && top_right.textContent != '' &&
                middle_left.textContent != '' && middle_center.textContent != '' && middle_right.textContent != '' &&
                low_left.textContent != '' && low_center.textContent != '' && low_right.textContent != ''
            ) 
    {
        draw();
    }

}    

// ============ Funcao para Limpar resultados ==============

function clean() {
    document.getElementById('top-left').textContent = '';
    document.getElementById('top-center').textContent = '';
    document.getElementById('top-right').textContent = '';
    document.getElementById('middle-left').textContent = '';
    document.getElementById('middle-center').textContent = '';
    document.getElementById('middle-right').textContent = '';
    document.getElementById('low-left').textContent = '';
    document.getElementById('low-center').textContent = '';
    document.getElementById('low-right').textContent = '';
    document.getElementById('center-results').style.display = "none";
    document.getElementById('results-game').style.width = "0";
    primaryPlay = 'X';
    document.getElementById('op').innerHTML = 'X';
    document.getElementById('op').style.color = 'red';
    document.getElementById('body').style.background = "rgba(255, 0, 0, 0.5)";
}