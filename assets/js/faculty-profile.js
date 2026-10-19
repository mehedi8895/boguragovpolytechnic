const SUPABASE_URL="https://pkvcnxxuulzglzavzwuf.supabase.co";
const SUPABASE_ANON_KEY="sb_publishable_zYxVL8KCLEc52uYJ27eQSg_b1K4rRb0";
const root=document.querySelector("#profileRoot");
const esc=(v="")=>String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const value=(bn,en)=>bn||en||"তথ্য প্রকাশ করা হয়নি";
function field(icon,label,val,href=""){return '<div class="detail-item"><div class="detail-label"><i data-lucide="'+icon+'"></i>'+esc(label)+'</div>'+(href?'<a href="'+esc(href)+'">'+esc(val)+'</a>':'<strong>'+esc(val)+'</strong>')+'</div>';}
function state(title,description){root.innerHTML='<div class="profile-state"><i data-lucide="user-round-x"></i><h1>'+esc(title)+'</h1><p>'+esc(description)+'</p><a href="index.html#teachers">শিক্ষকমণ্ডলীতে ফিরে যান ↗</a></div>';if(window.lucide)lucide.createIcons();}
async function init(){
 const id=new URLSearchParams(location.search).get("id");
 if(!id){state("শিক্ষক নির্বাচন করা হয়নি","মূল ওয়েবসাইট থেকে কোনো শিক্ষকের কার্ডে ক্লিক করে প্রোফাইল খুলুন।");return;}
 try{
  const {createClient}=await import("https://esm.sh/@supabase/supabase-js@2");
  const db=createClient(SUPABASE_URL,SUPABASE_ANON_KEY);
  const {data,error}=await db.from("bgpi_faculty").select("id,name_bn,name_en,designation_bn,designation_en,department_bn,department_en,qualification_bn,qualification_en,email,phone,technology,photo_url").eq("id",id).eq("is_published",true).maybeSingle();
  if(error)throw error;if(!data){state("তথ্য পাওয়া যায়নি","এই শিক্ষক প্রোফাইলটি প্রকাশিত নেই অথবা লিংকটি সঠিক নয়।");return;}
  const f=data,name=value(f.name_bn,f.name_en),designation=value(f.designation_bn,f.designation_en),department=value(f.department_bn,f.department_en),qualification=value(f.qualification_bn,f.qualification_en),phone=f.phone||"",email=f.email||"";
  root.innerHTML='<div class="profile-banner"></div><section class="profile-main"><div class="profile-photo '+(!f.photo_url?'profile-photo-fallback':'')+'">'+(f.photo_url?'<img class="profile-photo" src="'+esc(f.photo_url)+'" alt="'+esc(name)+'" style="margin:0;width:100%;height:100%;border:0;box-shadow:none" loading="eager">':'<i data-lucide="user-round"></i>')+'</div><div class="profile-title"><h1>'+esc(name)+'</h1><p>'+esc(designation)+'</p><span class="profile-tag">'+esc(department)+'</span></div></section><section class="profile-section"><h2>শিক্ষক পরিচিতি</h2><div class="profile-details">'+field("briefcase-business","পদবি",designation)+field("building-2","বিভাগ / টেকনোলজি",department)+field("graduation-cap","শিক্ষাগত যোগ্যতা",qualification)+field("layers-3","টেকনোলজি",f.technology||"তথ্য প্রকাশ করা হয়নি")+'</div></section><section class="profile-section"><h2>যোগাযোগের তথ্য</h2><div class="profile-details">'+field("phone","মোবাইল / ফোন",phone,phone?"tel:"+phone.replace(/[^+\d]/g,""):"")+field("mail","ইমেইল",email,email?"mailto:"+email:"")+'</div></section>';
  if(window.lucide)lucide.createIcons();document.title=name+" | BGPI শিক্ষক প্রোফাইল";
 }catch(e){console.error(e);state("তথ্য লোড করা যায়নি","ইন্টারনেট সংযোগ পরীক্ষা করে আবার চেষ্টা করুন।");}
}
if(window.lucide)lucide.createIcons();init();