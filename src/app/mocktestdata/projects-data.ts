import { Project } from "../models/project.model";

export const PROJECTS: [Project] = [
    {
        "projectId" : 1,
        "projectName" : "test project",
        "priority" : 1,
        "startDate" : new Date(),
        "endDate" : new Date(),
        "manager" : {'userId':1,
        "employeeId": "emp213",
        "firstName" : "Bijith",
        "lastName" : "NV",
        },
        "tasks": [],
        "tasksCompleted": 1
    }
];