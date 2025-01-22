export const getMockData = async () => ({
  overview: {
    paidInvoice: 1000,
    pendingInvoice: 100,
    activeTalents: 5,
    activeProjects: 10,
  },
  talents: [
    { name: "Orlando Diggs", hiredDate: "18 Dec 2024", totalHours: 24 },
    { name: "And Lane", hiredDate: "18 Dec 2024", totalHours: 56 },
    { name: "Kate Morrison", hiredDate: "18 Dec 2024", totalHours: 12 },
  ],
  
  projects: [
    { name: "Website Development", tasks: 18, totalTasks: 25, team: ["A", "B", "C"] },
  ],
  timeTracking: {
    unbilledHours: "08:00:15",
    unbilledAmount: 1589,
    billedHours: "08:00:15",
    billedAmount: 2589,
  },
  activities: [
    { name: "Website Design Project", date: "8 Feb 2024", time: "07:23 PM" },
  ],
});

