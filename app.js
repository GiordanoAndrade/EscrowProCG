window.addEventListener('load', () => {
    // ---- CONFIGURAÇÕES DO CONTRATO ----
    const contractAddress = "0x7105E8dAe8D6FC57e2f232769Db9725830C6fc43";
    const contractABI = [{"inputs":[{"internalType":"address","name":"_usdcToken","type":"address"},{"internalType":"address","name":"_intermediario","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pedidoId","type":"uint256"},{"indexed":true,"internalType":"address","name":"iniciador","type":"address"}],"name":"DisputaAberta","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pedidoId","type":"uint256"},{"indexed":true,"internalType":"address","name":"vencedor","type":"address"},{"indexed":false,"internalType":"uint256","name":"valorResolvido","type":"uint256"}],"name":"DisputaResolvida","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pedidoId","type":"uint256"},{"indexed":true,"internalType":"address","name":"comprador","type":"address"}],"name":"EntregaConfirmada","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pedidoId","type":"uint256"},{"indexed":true,"internalType":"address","name":"vendedor","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestampEnvio","type":"uint256"}],"name":"EnvioConfirmado","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"novoIntermediario","type":"address"}],"name":"IntermediarioAlterado","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pedidoId","type":"uint256"},{"indexed":true,"internalType":"address","name":"canceladoPor","type":"address"},{"indexed":false,"internalType":"string","name":"razao","type":"string"}],"name":"PedidoCancelado","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pedidoId","type":"uint256"},{"indexed":true,"internalType":"address","name":"comprador","type":"address"},{"indexed":true,"internalType":"address","name":"vendedor","type":"address"},{"indexed":false,"internalType":"uint256","name":"valor","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"prazoConfirmacao","type":"uint256"}],"name":"PedidoCriado","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pedidoId","type":"uint256"},{"indexed":true,"internalType":"address","name":"vendedor","type":"address"}],"name":"ResolucaoAntecipadaSolicitada","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"pedidoId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valorParaComprador","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"valorParaVendedor","type":"uint256"}],"name":"ResolucaoPorInacaoDividida","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":false,"internalType":"uint256","name":"valor","type":"uint256"}],"name":"TaxasRetiradas","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"MAX_PRAZO_CONFIRMACAO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_VALOR_PEDIDO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_PRAZO_CONFIRMACAO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_VALOR_PEDIDO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRAZO_INACAO_INTERMEDIARIO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRAZO_LIMITE_ENVIO_VENDEDOR","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRAZO_MINIMO_PARA_SOLICITAR_ANTECIPADO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PRAZO_RESOLUCAO_DISPUTA","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TAXA_VENDEDOR_BPS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"abrirDisputa","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"cancelarPedido","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"cancelarPedidoPeloVendedor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"cancelarPorAtrasoEnvio","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"confirmarEntrega","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"confirmarEnvio","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_vendedor","type":"address"},{"internalType":"string","name":"_descricao","type":"string"},{"internalType":"uint256","name":"_valor","type":"uint256"},{"internalType":"uint256","name":"_prazo","type":"uint256"}],"name":"criarPedido","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"iniciarDisputaPeloVendedor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"intermediario","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"novo","type":"address"}],"name":"mudarIntermediario","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pedidos","outputs":[{"internalType":"address","name":"comprador","type":"address"},{"internalType":"address","name":"vendedor","type":"address"},{"internalType":"uint256","name":"valor","type":"uint256"},{"internalType":"string","name":"descricaoProduto","type":"string"},{"internalType":"uint256","name":"timestampCriacao","type":"uint256"},{"internalType":"uint256","name":"timestampEnvio","type":"uint256"},{"internalType":"uint256","name":"prazoConfirmacao","type":"uint256"},{"internalType":"enum EscrowProCG.StatusPedido","name":"status","type":"uint8"},{"internalType":"uint256","name":"timestampDisputaAberta","type":"uint256"},{"internalType":"uint256","name":"timestampSolicitacaoAntecipada","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proximoPedidoId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"bool","name":"liberarParaVendedor","type":"bool"}],"name":"resolverDisputa","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"resolverPorInacaoIntermediario","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"retirarTaxas","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"solicitarResolucaoAntecipada","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"taxasAcumuladas","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdcToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"}];
    const usdcABI = [ "function approve(address spender, uint256 amount) public returns (bool)", "function allowance(address owner, address spender) view returns (uint256)" ];
    const statusMap = ["Criado", "Enviado", "Entregue", "Cancelado", "Em Disputa", "Resolvido"];

    // ---- ELEMENTOS DO DOM ----
    const connectButton = document.getElementById('connectButton');
    const connectionStatus = document.getElementById('connectionStatus');
    const walletAddress = document.getElementById('walletAddress');
    const statusLog = document.getElementById('statusLog');
    
    const createOrderCard = document.getElementById('create-order-card');
    const interactCard = document.getElementById('interact-card');
    const createButton = document.getElementById('createButton');
    const viewButton = document.getElementById('viewButton');

    const orderDetailsDiv = document.getElementById('orderDetails');
    const orderActionsDiv = document.getElementById('orderActions');

    const confirmShipButton = document.getElementById('confirmShipButton');
    const confirmDeliveryButton = document.getElementById('confirmDeliveryButton');
    const openDisputeButton = document.getElementById('openDisputeButton');
    
    let provider, signer, contract, usdcContract;

    // ---- FUNÇÕES ----

    const log = (message) => {
        console.log(message);
        statusLog.innerHTML = message;
    };

    const connectWallet = async () => {
        if (typeof window.ethereum === 'undefined') {
            return log("Erro: MetaMask não está instalado.");
        }
        try {
            log("Conectando à carteira MetaMask...");
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner();
            contract = new ethers.Contract(contractAddress, contractABI, signer);
            
            const address = await signer.getAddress();
            walletAddress.textContent = address;
            connectionStatus.textContent = "Conectado";
            connectButton.textContent = "Carteira Conectada";
            connectButton.disabled = true;

            createOrderCard.classList.remove('hidden');
            interactCard.classList.remove('hidden');
            log("Carteira conectada com sucesso! Pronto para interagir.");
        } catch (error) {
            log(`Erro ao conectar: ${error.message}`);
        }
    };

    const createOrder = async () => {
        const seller = document.getElementById('sellerAddress').value;
        const description = document.getElementById('description').value;
        const value = document.getElementById('value').value;
        const deadlineDays = document.getElementById('deadline').value;

        if (!seller || !description || !value || !deadlineDays) {
            return log("Por favor, preencha todos os campos para criar o pedido.");
        }
        
        try {
            // USDC geralmente tem 6 casas decimais. Verifique o seu token.
            const valueInSmallestUnit = ethers.utils.parseUnits(value, 6);
            const deadlineInSeconds = deadlineDays * 86400; // dias para segundos

            log("Buscando endereço do contrato USDC...");
            const usdcAddress = await contract.usdcToken();
            usdcContract = new ethers.Contract(usdcAddress, usdcABI, signer);
            log(`Endereço USDC encontrado: ${usdcAddress}`);

            // 1. Aprovar o gasto de USDC pelo contrato de Escrow
            log("1/2: Solicitando aprovação para gastar USDC...");
            const approveTx = await usdcContract.approve(contractAddress, valueInSmallestUnit);
            log("Aguardando confirmação da transação de aprovação...");
            await approveTx.wait();
            log("✅ Aprovação concluída!");

            // 2. Criar o pedido no contrato de Escrow
            log("2/2: Criando o pedido no contrato de Escrow...");
            const createTx = await contract.criarPedido(seller, description, valueInSmallestUnit, deadlineInSeconds);
            log("Aguardando confirmação da transação de criação do pedido...");
            const receipt = await createTx.wait();
            log("✅ Pedido criado com sucesso!");

            // Extrair o ID do pedido a partir do evento
            const event = receipt.events?.find(e => e.event === 'PedidoCriado');
            if (event) {
                const orderId = event.args.pedidoId;
                log(`🚀 ID do seu novo pedido: ${orderId.toString()}`);
                document.getElementById('orderIdInput').value = orderId.toString();
                viewOrder();
            }

        } catch (error) {
            console.error(error);
            log(`❌ Erro ao criar pedido: ${error.message}`);
        }
    };
    
    const viewOrder = async () => {
        const orderId = document.getElementById('orderIdInput').value;
        if (!orderId) {
            return log("Por favor, insira um ID de pedido para consultar.");
        }

        try {
            log(`Consultando pedido ID: ${orderId}...`);
            const order = await contract.pedidos(orderId);

            if (order.comprador === "0x0000000000000000000000000000000000000000") {
                return log(`Pedido com ID ${orderId} não encontrado.`);
            }

            // Mostra os detalhes
            document.getElementById('orderIdDisplay').textContent = `#${orderId}`;
            document.getElementById('buyer').textContent = order.comprador;
            document.getElementById('seller').textContent = order.vendedor;
            document.getElementById('orderDescription').textContent = order.descricaoProduto;
            document.getElementById('orderValue').textContent = ethers.utils.formatUnits(order.valor, 6);
            document.getElementById('orderStatus').textContent = statusMap[order.status] || "Desconhecido";
            orderDetailsDiv.classList.remove('hidden');

            updateActionButtons(order);
            log(`Pedido ${orderId} carregado.`);
        } catch (error) {
            log(`❌ Erro ao consultar pedido: ${error.message}`);
        }
    };

    const updateActionButtons = async (order) => {
        // Esconde todos os botões e o container de ações primeiro
        orderActionsDiv.classList.add('hidden');
        confirmShipButton.classList.add('hidden');
        confirmDeliveryButton.classList.add('hidden');
        openDisputeButton.classList.add('hidden');

        const currentUser = await signer.getAddress();
        const status = order.status;

        // Se status for "Criado" (0) e o usuário for o vendedor
        if (status === 0 && currentUser.toLowerCase() === order.vendedor.toLowerCase()) {
            confirmShipButton.classList.remove('hidden');
        }

        // Se status for "Enviado" (1) e o usuário for o comprador
        if (status === 1 && currentUser.toLowerCase() === order.comprador.toLowerCase()) {
            confirmDeliveryButton.classList.remove('hidden');
            openDisputeButton.classList.remove('hidden');
        }

        // Se algum botão ficou visível, mostra o container
        if (!confirmShipButton.classList.contains('hidden') || 
            !confirmDeliveryButton.classList.contains('hidden') ||
            !openDisputeButton.classList.contains('hidden')) {
            orderActionsDiv.classList.remove('hidden');
        }
    };

    const handleAction = async (actionFunction) => {
        const orderId = document.getElementById('orderIdInput').value;
        if (!orderId) return log("ID do pedido não encontrado para executar a ação.");
        
        try {
            log(`Executando ação para o pedido ${orderId}...`);
            const tx = await actionFunction(orderId);
            log("Aguardando confirmação da transação...");
            await tx.wait();
            log("✅ Ação concluída com sucesso!");
            viewOrder(); // Atualiza os detalhes após a ação
        } catch (error) {
            log(`❌ Erro ao executar ação: ${error.message}`);
        }
    };
    
    // ---- EVENT LISTENERS ----
    connectButton.addEventListener('click', connectWallet);
    createButton.addEventListener('click', createOrder);
    viewButton.addEventListener('click', viewOrder);

    confirmShipButton.addEventListener('click', () => handleAction(contract.confirmarEnvio));
    confirmDeliveryButton.addEventListener('click', () => handleAction(contract.confirmarEntrega));
    openDisputeButton.addEventListener('click', () => handleAction(contract.abrirDisputa));
});