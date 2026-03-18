import { C } from '../lib/constants.js'

export const WingsLogo = ({ size = 48, color = C.green }) => (
  <svg width={size} height={size * 0.52} viewBox="0 0 100 52" fill="none">
      <path d="M48 28 C44 24 38 18 28 16 C20 14 12 17 6 23 C14 20 22 20 30 23 C22 24 14 27 10 34 C18 29 28 27 36 29 C30 31 22 36 20 42 C28 35 38 30 46 29 Z"
            stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                <path d="M52 28 C56 24 62 18 72 16 C80 14 88 17 94 23 C86 20 78 20 70 23 C78 24 86 27 90 34 C82 29 72 27 64 29 C70 31 78 36 80 42 C72 35 62 30 54 29 Z"
                      stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                        </svg>
                        )

                        export const IconBean = ({ size = 28, color = C.green }) => (
                          <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
                              <ellipse cx="16" cy="16" rx="9" ry="6" stroke={color} strokeWidth="1.8" strokeLinecap="round" transform="rotate(-35 16 16)"/>
                                  <path d="M12 11 C13 14 13 18 12 21" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
                                    </svg>
                                    )

                                    export const IconCup = ({ size = 28, color = C.green }) => (
                                      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
                                          <path d="M8 12 L10 24 Q10 26 12 26 L20 26 Q22 26 22 24 L24 12 Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                              <path d="M6 14 C4 14 4 17 6 20" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
                                                  <path d="M9 12 C10 9 12 8 16 8 C20 8 22 9 23 12" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
                                                      <path d="M13 5 Q13 3 14 3" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
                                                          <path d="M16 6 Q16 4 16 3" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
                                                            </svg>
                                                            )

                                                            export const IconPourOver = ({ size = 28, color = C.green }) => (
                                                              <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
                                                                  <path d="M10 8 L16 20 L22 8 Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                                                      <rect x="12" y="20" width="8" height="6" rx="1" stroke={color} strokeWidth="1.6"/>
                                                                          <path d="M13 12 L19 12" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
                                                                              <path d="M16 26 L16 29" stroke={color} strokeWidth="1.6" strokeLinecap="round"/>
                                                                                </svg>
                                                                                )

                                                                                export const IconLocation = ({ size = 28, color = C.green }) => (
                                                                                  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
                                                                                      <path d="M16 4 C11 4 7 8 7 13 C7 19 16 28 16 28 C16 28 25 19 25 13 C25 8 21 4 16 4 Z" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                                                                          <circle cx="16" cy="13" r="3" stroke={color} strokeWidth="1.6"/>
                                                                                            </svg>
                                                                                            )

                                                                                            export const DemoTag = ({ label }) => (
                                                                                              <div style={{ position:'absolute', top:8, left:8, background:'rgba(201,148,26,0.92)', borderRadius:5, padding:'2px 8px', fontSize:9, color:'#fff', fontWeight:700, letterSpacing:'0.08em', zIndex:3, fontFamily:'sans-serif' }}>
                                                                                                  DEMO · {label}
                                                                                                    </div>
                                                                                                    )

                                                                                                    export const FillerImg = ({ src, label, aspect='4/3', radius=12, height, overlay=false }) => (
                                                                                                      <div style={{ aspectRatio:aspect, height, borderRadius:radius, overflow:'hidden', position:'relative', background:'#c8bfb0', flexShrink:0 }}>
                                                                                                          <img src={src} alt={label} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} loading="lazy" />
                                                                                                              {overlay && <div style={{ position:'absolute', inset:0, background:'rgba(15,20,16,0.32)' }} />}
                                                                                                                  <DemoTag label={label} />
                                                                                                                    </div>
                                                                                                                    )

                                                                                                                    export const SectionDivider = ({ color = C.green }) => (
                                                                                                                      <div style={{ width:40, height:2, background:color, marginBottom:14 }} />
                                                                                                                      )

                                                                                                                      export const GreenBtn = ({ children, onClick, style={} }) => (
                                                                                                                        <button onClick={onClick} style={{ background:C.green, color:'#fff', border:'none', borderRadius:24, padding:'12px 26px', fontSize:13, fontWeight:600, cursor:'pointer', letterSpacing:'0.04em', transition:'background 0.2s', ...style }}
                                                                                                                            onMouseEnter={e => e.currentTarget.style.background='#244d35'}
                                                                                                                                onMouseLeave={e => e.currentTarget.style.background=C.green}>
                                                                                                                                    {children}
                                                                                                                                      </button>
                                                                                                                                      )

                                                                                                                                      export const OutlineBtn = ({ children, onClick, style={} }) => (
                                                                                                                                        <button onClick={onClick} style={{ background:'transparent', color:C.green, border:`1.5px solid ${C.green}`, borderRadius:24, padding:'12px 26px', fontSize:13, fontWeight:500, cursor:'pointer', transition:'all 0.2s', ...style }}
                                                                                                                                            onMouseEnter={e => { e.currentTarget.style.background=C.green; e.currentTarget.style.color='#fff'; }}
                                                                                                                                                onMouseLeave={e => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color=C.green; }}>
                                                                                                                                                    {children}
                                                                                                                                                      </button>
                                                                                                                                                      )

                                                                                                                                                      export const GLOBAL_CSS = `
                                                                                                                                                        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600;1,700&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
                                                                                                                                                          *{box-sizing:border-box;margin:0;padding:0;}
                                                                                                                                                            html,body{font-family:'DM Sans',sans-serif;background:#FDFAF5;color:#2A2118;overflow-x:hidden;}
                                                                                                                                                              a{text-decoration:none;color:inherit;}
                                                                                                                                                                .serif{font-family:'Cormorant Garamond',serif;}
                                                                                                                                                                  @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
                                                                                                                                                                    .fu{animation:fadeUp 0.7s ease both;}
                                                                                                                                                                      .fu2{animation:fadeUp 0.7s 0.12s ease both;}
                                                                                                                                                                        .fu3{animation:fadeUp 0.7s 0.24s ease both;}
                                                                                                                                                                          .fu4{animation:fadeUp 0.7s 0.36s ease both;}
                                                                                                                                                                            .hover-lift{transition:transform 0.25s ease,box-shadow 0.25s ease;}
                                                                                                                                                                              .hover-lift:hover{transform:translateY(-3px);box-shadow:0 16px 40px rgba(0,0,0,0.1);}
                                                                                                                                                                                .nav-btn{background:none;border:none;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:12px;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;color:#2A2118;transition:color 0.2s;padding:4px 0;}
                                                                                                                                                                                  .nav-btn:hover{color:#1C3A2A;}
                                                                                                                                                                                    input,textarea,select{font-family:'DM Sans',sans-serif;}
                                                                                                                                                                                      input::placeholder,textarea::placeholder{color:#b0a090;}
                                                                                                                                                                                        input:focus,textarea:focus,select:focus{outline:2px solid #1C3A2A;outline-offset:2px;}
                                                                                                                                                                                          ::-webkit-scrollbar{width:5px;}
                                                                                                                                                                                            ::-webkit-scrollbar-track{background:#F5F0E8;}
                                                                                                                                                                                              ::-webkit-scrollbar-thumb{background:#1C3A2A;border-radius:3px;}
                                                                                                                                                                                                @media(max-width:768px){
                                                                                                                                                                                                    .desktop-only{display:none!important;}
                                                                                                                                                                                                        .hero-grid,.about-grid,.contact-grid,.menu-cols,.blog-feat-grid{grid-template-columns:1fr!important;}
                                                                                                                                                                                                            .highlight-grid,.blog-grid{grid-template-columns:1fr!important;}
                                                                                                                                                                                                                .footer-cols{grid-template-columns:1fr 1fr!important;}
                                                                                                                                                                                                                    .feat-strip{grid-template-columns:1fr 1fr!important;}
                                                                                                                                                                                                                        .hero-img-col{display:none!important;}
                                                                                                                                                                                                                            .menu-sticky{position:static!important;}
                                                                                                                                                                                                                                .admin-grid{grid-template-columns:1fr!important;}
                                                                                                                                                                                                                                  }
                                                                                                                                                                                                                                  `