
import {
  getDashboardStatsService,
} from "../services/dashboardService.js";

export const getDashboardStats = async (req, res) => {
  try {
    const stats = await getDashboardStatsService();

    return res.status(200).json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error("Dashboard stats error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to fetch dashboard statistics",
    });
  }
};
