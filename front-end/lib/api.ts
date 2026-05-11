const API_URL = "http://26.254.103.85:8000"

//cliente
export async function CriarClientes(cliente: { nome: string; email: string; telefone: string; cpf: string; endereco: string; cep: string; }) {
    const res = await fetch(`${API_URL}/cliente/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
    });

    return res.json();
}
export async function ListarClientes() {
    const res = await fetch(`${API_URL}/cliente/`);
    return res.json();
}
export async function SelecionarCliente(id: number) {
    const res = await fetch(`${API_URL}/cliente/${id}/`);
    return res.json();
}
export async function DeletarCliente(id: number) {
    const res = await fetch(`${API_URL}/cliente/${id}/`, {
        method: 'DELETE'
    });
    return res.json();
}
//produto
export async function CriarProduto(produto: {nome: string; preco: number; estoque: number; tamanho: string; categoria: string;}) {
    const res = await fetch(`${API_URL}/produto/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto)
    });
    return res.json();
}
export async function ListarProdutos() {
    const res = await fetch(`${API_URL}/produto/`)
    return await res.json()
}
export async function SelecionarProduto(id: number) {
    const res = await fetch(`${API_URL}/produto/${id}/`);
    return res.json();
}
export async function DeletarProduto(id: number) {
    const res = await fetch(`${API_URL}/produto/${id}/`, {
        method: 'DELETE'
    });
    return res.json();
}
//carrinho
export async function CriarCarrinho(carrinho: { cliente_id: number; produto_id: number; quantidade: number; }) {
    const res = await fetch(`${API_URL}/carrinho/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(carrinho)
    });
    return res.json();
}
export async function ListarCarrinhos() {
    const res = await fetch(`${API_URL}/carrinho/`);
    return res.json();
}
export async function ExcluirCarrinho(id: number) {
    const res = await fetch(`${API_URL}/carrinho/${id}/`, {
        method: 'DELETE'
    });
    return res.json();
}