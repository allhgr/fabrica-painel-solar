-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Produto" (
    "id_produto" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "descricao" TEXT,
    "preco" REAL,
    "quantidade" INTEGER,
    "id_materia_prima" INTEGER,
    CONSTRAINT "Produto_id_materia_prima_fkey" FOREIGN KEY ("id_materia_prima") REFERENCES "MateriaPrima" ("id_materia_prima") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Produto" ("descricao", "id_produto", "preco", "quantidade") SELECT "descricao", "id_produto", "preco", "quantidade" FROM "Produto";
DROP TABLE "Produto";
ALTER TABLE "new_Produto" RENAME TO "Produto";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
