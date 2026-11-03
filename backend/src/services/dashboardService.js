
import prisma from "../config/db.js";

// Get complete admin dashboard overview
export const getDashboardStatsService = async () => {
  const [
    totalLeads,
    newLeads,
    contactedLeads,
    inProgressLeads,
    convertedLeads,
    closedLeads,

    totalApplications,
    newApplications,
    reviewingApplications,
    shortlistedApplications,
    rejectedApplications,
    hiredApplications,

    recentLeads,
    recentApplications,
  ] = await Promise.all([
    // Lead statistics
    prisma.leads.count(),
    prisma.leads.count({ where: { status: "NEW" } }),
    prisma.leads.count({ where: { status: "CONTACTED" } }),
    prisma.leads.count({ where: { status: "IN_PROGRESS" } }),
    prisma.leads.count({ where: { status: "CONVERTED" } }),
    prisma.leads.count({ where: { status: "CLOSED" } }),

    // Application statistics
    prisma.applications.count(),
    prisma.applications.count({ where: { status: "NEW" } }),
    prisma.applications.count({ where: { status: "REVIEWING" } }),
    prisma.applications.count({ where: { status: "SHORTLISTED" } }),
    prisma.applications.count({ where: { status: "REJECTED" } }),
    prisma.applications.count({ where: { status: "HIRED" } }),

    // Recent enquiries
    prisma.leads.findMany({
      take: 5,
      orderBy: { created_at: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        service: true,
        status: true,
        created_at: true,
      },
    }),

    // Recent applications
    prisma.applications.findMany({
      take: 5,
      orderBy: { created_at: "desc" },
      select: {
        id: true,
        name: true,
        email: true,
        position: true,
        status: true,
        created_at: true,
      },
    }),
  ]);

  return {
    leads: {
      total: totalLeads,
      new: newLeads,
      contacted: contactedLeads,
      inProgress: inProgressLeads,
      converted: convertedLeads,
      closed: closedLeads,
    },

    applications: {
      total: totalApplications,
      new: newApplications,
      reviewing: reviewingApplications,
      shortlisted: shortlistedApplications,
      rejected: rejectedApplications,
      hired: hiredApplications,
    },

    recentLeads: recentLeads.map((lead) => ({
      ...lead,
      id: lead.id.toString(),
    })),

    recentApplications: recentApplications.map((application) => ({
      ...application,
      id: application.id.toString(),
    })),
  };
};
