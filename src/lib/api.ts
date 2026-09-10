const API_BASE_URL = "/api";

export interface User {
    id: string;  
    name: string;
    email: string;
    role: "client" | "freelancer";
}      

export interface Project {
    id: string;  
    title: string;
    description: string;
    category: string;
    budgetMin: number;
    budgetMax: number;
    deadline: string;
    status: "open" | "in_progress";
    clientName: string;
    proposalCount: number;
    createdAt?: string;
}  

export interface Proposal {
  id: string;
  projectId: string;
  projectTitle?: string;
  freelancerId?: string;
  freelancerName?: string;
  coverLetter: string;
  proposedPrice: number;
  estimatedDuration: number;
  status: "pending" | "accepted" | "rejected";
  createdAt: string;
}

export interface Contract {
  id: string;
  projectId: string;
  projectTitle: string;
  clientId: string;
  clientName: string;
  freelancerId: string;
  freelancerName: string;
  amount: number;
  status: "active";
  createdAt: string;
}

async function request<T>(
  path: string,      
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,      
    headers: {
      "Content-Type": "application/json",      
      ...options?.headers,
    },      
    credentials: "include",
  });      

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(data.message ?? "Something went wrong");
    (error as Error & { code?: string }).code = data.error;
    throw error;
  }      

  return data;
}      

export async function signup(data: {
  name: string;    
  email: string;
  password: string;
  role: "client" | "freelancer";
}) {
  return request<{
    message: string;    
    user: User;
  }>("/auth/signup", {
    method: "POST",    
    body: JSON.stringify(data),
  });    
}    

export async function login(data: {
  email: string;    
  password: string;
}) {
  return request<{
    message: string;    
    user: User;
  }>("/auth/login", {
    method: "POST",    
    body: JSON.stringify(data),
  });    
}    

export async function getCurrentUser() {
  return request<{
    user: {
      userId: string;    
      role: "client" | "freelancer";
      email: string;
    };    
  }>("/auth/me");    
}    

export async function getProjects(filters?: {
  category?: string;  
  minBudget?: number;
  maxBudget?: number;
}) {
  const params = new URLSearchParams();  

  if (filters?.category) {
    params.set("category", filters.category);  
  }  

  if (filters?.minBudget !== undefined) {
    params.set("minBudget", String(filters.minBudget));  
  }  

  if (filters?.maxBudget !== undefined) {
    params.set("maxBudget", String(filters.maxBudget));  
  }  

  const query = params.toString();

  return request<{
    projects: Project[];  
  }>(`/projects${query ? `?${query}` : ""}`);  
}  

export async function getProject(projectId: string) {
  return request<{
    project: Project;  
  }>(`/projects/${projectId}`);  
}  

export async function submitProposal(
  projectId: string,
  data: {
    coverLetter: string;
    proposedPrice: number;
    estimatedDuration: number;
  },
) {
  return request<{
    message: string;
    proposal: Proposal;
  }>(`/projects/${projectId}/proposals`, {
    method: "POST",
    body: JSON.stringify(data),
  });
}

export async function getProjectProposals(projectId: string) {
  return request<{
    proposals: Proposal[];
  }>(`/projects/${projectId}/proposals`);
}

export async function getMyProposals() {
  return request<{
    proposals: Proposal[];
  }>("/proposals/mine");
}

export async function acceptProposal(proposalId: string) {
  return request<{
    message: string;
    proposal: Proposal;
    contract: Contract;
  }>(`/proposals/${proposalId}/accept`, {
    method: "PUT",
  });
}

export async function getContracts() {
  return request<{
    contracts: Contract[];
  }>("/contracts");
}