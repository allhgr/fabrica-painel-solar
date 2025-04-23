-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT,
    "data_nascimento" DATETIME,
    "telefone" TEXT,
    "funcao" TEXT
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id_cliente" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT,
    "telefone" TEXT,
    "data_nascimento" DATETIME
);

-- CreateTable
CREATE TABLE "Produto" (
    "id_produto" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT,
    "preco" REAL,
    "quantidade" INTEGER
);

-- CreateTable
CREATE TABLE "Venda" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_cliente" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "data_venda" DATETIME,
    CONSTRAINT "Venda_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente" ("id_cliente") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Venda_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ItemVenda" (
    "id_venda" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_produto" INTEGER NOT NULL,
    "quantidade" INTEGER,
    "preco_unitario" REAL,
    CONSTRAINT "ItemVenda_id_venda_fkey" FOREIGN KEY ("id_venda") REFERENCES "Venda" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ItemVenda_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "Produto" ("id_produto") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Fornecedor" (
    "id_fornecedor" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT,
    "tipo_fornecimento" TEXT,
    "localidade" TEXT
);

-- CreateTable
CREATE TABLE "MateriaPrima" (
    "id_materia_prima" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT,
    "preco" REAL,
    "quantidade" INTEGER
);

-- CreateTable
CREATE TABLE "Compra" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_fornecedor" INTEGER NOT NULL,
    "id_usuario" INTEGER NOT NULL,
    "data_compra" DATETIME,
    CONSTRAINT "Compra_id_fornecedor_fkey" FOREIGN KEY ("id_fornecedor") REFERENCES "Fornecedor" ("id_fornecedor") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Compra_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ItemCompra" (
    "id_compra" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_materia_prima" INTEGER NOT NULL,
    "quantidade" INTEGER,
    "preco_unitario" REAL,
    CONSTRAINT "ItemCompra_id_compra_fkey" FOREIGN KEY ("id_compra") REFERENCES "Compra" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ItemCompra_id_materia_prima_fkey" FOREIGN KEY ("id_materia_prima") REFERENCES "MateriaPrima" ("id_materia_prima") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Estoque" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_produto" INTEGER NOT NULL,
    "id_materia_prima" INTEGER NOT NULL,
    CONSTRAINT "Estoque_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "Produto" ("id_produto") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Estoque_id_materia_prima_fkey" FOREIGN KEY ("id_materia_prima") REFERENCES "MateriaPrima" ("id_materia_prima") ON DELETE RESTRICT ON UPDATE CASCADE
);
