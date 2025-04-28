/*
  Warnings:

  - The primary key for the `ItemCompra` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ItemVenda` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Estoque" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_produto" INTEGER,
    "id_materia_prima" INTEGER,
    "quantidade" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Estoque_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "Produto" ("id_produto") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "Estoque_id_materia_prima_fkey" FOREIGN KEY ("id_materia_prima") REFERENCES "MateriaPrima" ("id_materia_prima") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Estoque" ("id", "id_materia_prima", "id_produto") SELECT "id", "id_materia_prima", "id_produto" FROM "Estoque";
DROP TABLE "Estoque";
ALTER TABLE "new_Estoque" RENAME TO "Estoque";
CREATE TABLE "new_ItemCompra" (
    "id_compra" INTEGER NOT NULL,
    "id_materia_prima" INTEGER NOT NULL,
    "quantidade" INTEGER,
    "preco_unitario" REAL,

    PRIMARY KEY ("id_compra", "id_materia_prima"),
    CONSTRAINT "ItemCompra_id_compra_fkey" FOREIGN KEY ("id_compra") REFERENCES "Compra" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ItemCompra_id_materia_prima_fkey" FOREIGN KEY ("id_materia_prima") REFERENCES "MateriaPrima" ("id_materia_prima") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ItemCompra" ("id_compra", "id_materia_prima", "preco_unitario", "quantidade") SELECT "id_compra", "id_materia_prima", "preco_unitario", "quantidade" FROM "ItemCompra";
DROP TABLE "ItemCompra";
ALTER TABLE "new_ItemCompra" RENAME TO "ItemCompra";
CREATE TABLE "new_ItemVenda" (
    "id_venda" INTEGER NOT NULL,
    "id_produto" INTEGER NOT NULL,
    "quantidade" INTEGER,
    "preco_unitario" REAL,

    PRIMARY KEY ("id_venda", "id_produto"),
    CONSTRAINT "ItemVenda_id_venda_fkey" FOREIGN KEY ("id_venda") REFERENCES "Venda" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ItemVenda_id_produto_fkey" FOREIGN KEY ("id_produto") REFERENCES "Produto" ("id_produto") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ItemVenda" ("id_produto", "id_venda", "preco_unitario", "quantidade") SELECT "id_produto", "id_venda", "preco_unitario", "quantidade" FROM "ItemVenda";
DROP TABLE "ItemVenda";
ALTER TABLE "new_ItemVenda" RENAME TO "ItemVenda";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
