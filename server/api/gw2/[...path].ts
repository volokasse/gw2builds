// server/api/gw2/[...path].ts
import { defineEventHandler, getQuery, setHeader } from 'h3'
import { fetchGw2 } from '@/server/utils/gw2'

export default defineEventHandler(async (event) => {
  const params = event.context.params;
  const path = Array.isArray(params?.path) ? params!.path.join('/') : (params?.path as string) || '';

  const query = getQuery(event);
  const targetUrl = `${path}` + (query.ids ? `?ids=${query.ids}` : '');
  const data = await fetchGw2(targetUrl, 1000 * 60 * 60 * 6);

  // on autorise le front à consommer
  setHeader(event, 'Access-Control-Allow-Origin', '*');
  return data;
});
