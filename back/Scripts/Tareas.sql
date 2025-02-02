﻿CREATE TABLE Tareas (
    Id UNIQUEIDENTIFIER PRIMARY KEY DEFAULT NEWID(),
    Titulo NVARCHAR(255) NOT NULL,
    Descripcion NVARCHAR(MAX) NOT NULL,
    IdCreador UNIQUEIDENTIFIER NOT NULL,
    Ubicacion NVARCHAR(255) NOT NULL,
    FechaPublicacion DATETIME DEFAULT GETDATE(),
    HorarioDeseado NVARCHAR(50) NOT NULL,
    FechaDeseada NVARCHAR(50) NOT NULL,
    DineroOfrecido DECIMAL(10,2) NOT NULL CHECK (DineroOfrecido >= 0),
    FOREIGN KEY (IdCreador) REFERENCES Users(Id) ON DELETE CASCADE
);
