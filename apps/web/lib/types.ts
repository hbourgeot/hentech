export interface Employee {
  address: string;
  email: string;
  employeeProjects: EmployeeProject[];
  id: number;
  lastName: string;
  name: string;
  password: string;
  phoneNumber: string;
  role: Role;
}

export interface EmployeeProject {
  comercialDesignation: string;
  id: number;
  name: string;
  status: string;
  type: null;
}

export interface Role {
  id: number;
  role: string;
}

export interface Project {
  comercialDesignation: string;
  employees: Employee[];
  id: number;
  leader: Employee;
  name: string;
  status: string;
  tasks: any[];
  type: string;
}
