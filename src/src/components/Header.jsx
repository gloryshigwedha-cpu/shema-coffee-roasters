import { C, getOpenStatus } from '../lib/constants.js'
import { WingsLogo } from './UI.jsx'

export default function Header({ go, hoursData }) {
  const status = getOpenStatus(hoursData)

    return (
        <header style={{ background:C.warm, borderBottom:`1px solid ${C.cream}`, padding:'0 5%', position:'sticky', top:0, zIndex:100 }}>
              <div style={{ maxWidth:1200, margin:'0 auto', height:68, display:'flex', alignItems:'center', justifyContent:'space-between', gap:24 }}>

                      <div style={{ display:'flex', alignItems:'center', gap:10, cursor:'pointer', flexShrink:0 }} onClick={() => go('top')}>
                                <WingsLogo size={42} color={C.green} />
                                          <div>
                                                      <div className="serif" style={{ fontSize:18, fontWeight:700, letterSpacing:'0.15em', color:C.green, lineHeight:1 }}>SHEMA</div>
                                                                  <div style={{ fontSize:9, letterSpacing:'0.2em', color:C.muted, textTransform:'uppercase', marginTop:1 }}>Coffee Roasters</div>
                                                                            </div>
                                                                                    </div>

                                                                                            <nav className="desktop-only" style={{ display:'flex', gap:32, alignItems:'center' }}>
                                                                                                      {[['menu','Menu'],['about','About'],['blog','The Grind'],['contact','Find Us']].map(([id,label]) => (
                                                                                                                  <button key={id} className="nav-btn" onClick={() => go(id)}>{label}</button>
                                                                                                                            ))}
                                                                                                                                    </nav>

                                                                                                                                            <div style={{ display:'flex', alignItems:'center', gap:14, flexShrink:0 }}>
                                                                                                                                                      <div className="desktop-only" style={{ display:'flex', alignItems:'center', gap:5 }}>
                                                                                                                                                                  <span style={{ width:6, height:6, borderRadius:'50%', background:status.open ? '#3D9A3D' : '#b0b0b0', display:'inline-block' }} />
                                                                                                                                                                              <span style={{ fontSize:11, color:C.muted, letterSpacing:'0.06em' }}>{status.short}</span>
                                                                                                                                                                                        </div>
                                                                                                                                                                                                  <div style={{ width:1, height:18, background:C.cream }} className="desktop-only" />
                                                                                                                                                                                                            <button onClick={() => go('menu')} style={{ background:C.green, color:'#fff', border:'none', borderRadius:20, padding:'8px 20px', fontSize:12, fontWeight:600, letterSpacing:'0.06em', cursor:'pointer', transition:'background 0.2s', whiteSpace:'nowrap' }}
                                                                                                                                                                                                                        onMouseEnter={e => e.currentTarget.style.background='#244d35'}
                                                                                                                                                                                                                                    onMouseLeave={e => e.currentTarget.style.background=C.green}>
                                                                                                                                                                                                                                                Order Online
                                                                                                                                                                                                                                                          </button>
                                                                                                                                                                                                                                                                  </div>
                                                                                                                                                                                                                                                                        </div>
                                                                                                                                                                                                                                                                            </header>
                                                                                                                                                                                                                                                                              )
                                                                                                                                                                                                                                                                              }