import { ipcMainDatabaseHandle } from "../util.js";
import db from "../db.js";

export async function setupOpenRouterHandlers() {
  ipcMainDatabaseHandle("getOpenRouterModel", async (payload) => {
    const model = await db.getOpenRouterModel(payload.userId);
    return {
      userId: payload.userId,
      model,
    };
  });

  ipcMainDatabaseHandle("addOpenRouterModel", async (payload) => {
    await db.addOpenRouterModel(payload.userId, payload.model);
    return {
      userId: payload.userId,
      model: payload.model,
    };
  });

  ipcMainDatabaseHandle("deleteOpenRouterModel", async (payload) => {
    await db.deleteOpenRouterModel(payload.userId, payload.id);
    return {
      userId: payload.userId,
      id: payload.id,
    };
  });

  ipcMainDatabaseHandle("getOpenRouterModels", async (payload) => {
    const models = await db.getOpenRouterModels(payload.userId);
    return {
      userId: payload.userId,
      models,
    };
  });
}
