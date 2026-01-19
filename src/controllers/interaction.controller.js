import InteractionService from "../services/interaction.service.js";

export const updateInteractions = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { type } = req.body;

    const stats = InteractionService.update(id, type);

    res.status(200).json({
      success: true,
      stats
    });
  } catch (error) {
    next(error);
  }
};
