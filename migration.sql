-- CreateTable
CREATE TABLE "Employee" (
    "id" INTEGER NOT NULL,
    "name" CHARACTER VARYING(50) NOT NULL,
    "lastName" CHARACTER VARYING(50) NOT NULL,
    "address" CHARACTER VARYING(200) NOT NULL,
    "email" CHARACTER VARYING(100) NOT NULL,
    "phoneNumber" CHARACTER VARYING(50) NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmployeeProject" (
    "employeeId" INTEGER NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "EmployeeProject_pkey" PRIMARY KEY ("employeeId","projectId")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" INTEGER NOT NULL,
    "name" CHARACTER VARYING(50) NOT NULL,
    "comercialDesignation" CHARACTER VARYING(50) NOT NULL,
    "status" CHARACTER VARYING(50) NOT NULL,
    "leaderId" INTEGER NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Task" (
    "id" SERIAL NOT NULL,
    "description" CHARACTER VARYING(200) NOT NULL,
    "estimatedDuration" CHARACTER VARYING(50) NOT NULL,
    "actualDuration" CHARACTER VARYING(50) NOT NULL,
    "estimatedDate" TIMESTAMPTZ NOT NULL,
    "actualDate" TIMESTAMPTZ NOT NULL,
    "type" CHARACTER VARYING(50) NOT NULL,
    "projectId" INTEGER NOT NULL,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" SERIAL NOT NULL,
    "specificationDocument" CHARACTER VARYING(200) NOT NULL,
    "sourceCode" CHARACTER VARYING(200) NOT NULL,
    "description" CHARACTER VARYING(200) NOT NULL,
    "type" CHARACTER VARYING(50) NOT NULL,
    "taskId" INTEGER NOT NULL,

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Version" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "description" CHARACTER VARYING(200) NOT NULL,
    "tag" CHARACTER VARYING(50) NOT NULL,
    "documentId" INTEGER NOT NULL,

    CONSTRAINT "Version_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Employee_email_key" ON "Employee"("email");

-- AddForeignKey
ALTER TABLE "EmployeeProject" ADD CONSTRAINT "EmployeeProject_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeProject" ADD CONSTRAINT "EmployeeProject_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_leaderId_fkey" FOREIGN KEY ("leaderId") REFERENCES "Employee"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_taskId_fkey" FOREIGN KEY ("taskId") REFERENCES "Task"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Version" ADD CONSTRAINT "Version_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
