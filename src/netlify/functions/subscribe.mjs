export default async (req) => {
      if (req.method !== 'POST') {
          return new Response(JSON.stringify({ error: 'Method not allowed' }), {
                status: 405,
                      headers: { 'Content-Type': 'application/json' }
                          })
                            }

                              let email
                                try {
                                    const body = await req.json()
                                        email = body.email?.trim().toLowerCase()
                                          } catch {
                                              return new Response(JSON.stringify({ error: 'Invalid JSON' }), {
                                                    status: 400,
                                                          headers: { 'Content-Type': 'application/json' }
                                                              })
                                                                }

                                                                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                                                                    if (!email || !emailRegex.test(email)) {
                                                                        return new Response(JSON.stringify({ error: 'Invalid email address' }), {
                                                                              status: 400,
                                                                                    headers: { 'Content-Type': 'application/json' }
                                                                                        })
                                                                                          }

                                                                                            const supabaseUrl = Netlify.env.get('VITE_SUPABASE_URL')
                                                                                              const serviceKey  = Netlify.env.get('SUPABASE_SERVICE_ROLE_KEY')

                                                                                                if (!supabaseUrl || !serviceKey) {
                                                                                                    return new Response(JSON.stringify({ success: true }), {
                                                                                                          status: 200,
                                                                                                                headers: { 'Content-Type': 'application/json' }
                                                                                                                    })
                                                                                                                      }

                                                                                                                        try {
                                                                                                                            const res = await fetch(`${supabaseUrl}/rest/v1/subscribers`, {
                                                                                                                                  method: 'POST',
                                                                                                                                        headers: {
                                                                                                                                                'Content-Type': 'application/json',
                                                                                                                                                        'apikey': serviceKey,
                                                                                                                                                                'Authorization': `Bearer ${serviceKey}`,
                                                                                                                                                                        'Prefer': 'resolution=ignore-duplicates',
                                                                                                                                                                              },
                                                                                                                                                                                    body: JSON.stringify({ email }),
                                                                                                                                                                                        })

                                                                                                                                                                                            if (!res.ok && res.status !== 409) {
                                                                                                                                                                                                  return new Response(JSON.stringify({ error: 'Subscription failed.' }), {
                                                                                                                                                                                                          status: 500,
                                                                                                                                                                                                                  headers: { 'Content-Type': 'application/json' }
                                                                                                                                                                                                                        })
                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                return new Response(JSON.stringify({ success: true }), {
                                                                                                                                                                                                                                      status: 200,
                                                                                                                                                                                                                                            headers: { 'Content-Type': 'application/json' }
                                                                                                                                                                                                                                                })
                                                                                                                                                                                                                                                  } catch (err) {
                                                                                                                                                                                                                                                      return new Response(JSON.stringify({ error: 'Server error.' }), {
                                                                                                                                                                                                                                                            status: 500,
                                                                                                                                                                                                                                                                  headers: { 'Content-Type': 'application/json' }
                                                                                                                                                                                                                                                                      })
                                                                                                                                                                                                                                                                        }
                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                        export const config = {
                                                                                                                                                                                                                                                                          path: '/api/subscribe'
                                                                                                                                                                                                                                                                          }
}