import Cache from "../Cache.js";
export async function getCache(prompt) {
  const cache = await Cache.findOne({ prompt });
  if (cache) {
    return cache.answer;
  }
  return null;
}

export async function saveCache(prompt,answer){
    const cache = new Cache({prompt,answer})
    await cache.save()
}