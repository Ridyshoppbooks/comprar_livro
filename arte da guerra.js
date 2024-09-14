document.addEventListener('DOMContentLoaded', function() {
    var cartIcon = document.getElementById('cart-icon');
    var modal = document.getElementById('cart-modal');
    var closeBtn = document.getElementsByClassName('close-btn')[0];
    var cartItemsContainer = document.getElementById('cart-items');
    var cartTotalContainer = document.getElementById('cart-total');
    var cartItems = [];
    var totalAmount = 0;
    var cartBadge = document.getElementById('cart-badge');

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        if (cartItems.length === 0) {
            cartItemsContainer.innerHTML = '<p>Seu carrinho está vazio.</p>';
            cartBadge.textContent = '0'; // Atualiza o número no badge
        } else {
            cartItems.forEach(function(item, index) {
                var cartItemDiv = document.createElement('div');
                cartItemDiv.className = 'cart-item';
                cartItemDiv.innerHTML = `
                    <img src="As 48 leis do poder.jpg" alt="${item.name}">
                    <p>${item.name} - R$ ${item.price}</p>
                    <button class="remove-btn" data-index="${index}">Remover</button>
                `;
                cartItemsContainer.appendChild(cartItemDiv);
            });

            cartBadge.textContent = cartItems.length; // Atualiza o número no badge
        }

        // Atualizar o total do carrinho
        totalAmount = cartItems.reduce(function(sum, item) {
            return sum + parseFloat(item.price);
        }, 0);

        cartTotalContainer.innerHTML = `<p>Total: R$ ${totalAmount.toFixed(2)}</p>`;
    }

});
// Obtém o elemento da modal
var modal = document.getElementById("myModal");

// Obtém o botão que abre a modal
var btn = document.getElementById("openModalBtn");

// Obtém o elemento <span> que fecha a modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre a modal
btn.onclick = function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    modal.style.display = "block";
}

// Quando o usuário clicar no <span> (x), fecha a modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora da modal, fecha a modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// finaliz.js

// Obtém o modal
var modal = document.getElementById("myModal");

// Obtém o botão que abre o modal
var btn = document.getElementById("openModalBtn");

// Obtém o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Quando o usuário clicar em <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, fecha-o
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
