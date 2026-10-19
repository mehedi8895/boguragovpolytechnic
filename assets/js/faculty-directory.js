const SUPABASE_URL = "https://pkvcnxxuulzglzavzwuf.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_zYxVL8KCLEc52uYJ27eQSg_b1K4rRb0";
const fallbackFaculty = [
{name_bn:"মোঃ শফিউল আল আজিজ",designation_bn:"চিফ ইন্সট্রাক্টর ও বিভাগীয় প্রধান; একাডেমিক ইনচার্জ",department_bn:"মেকানিক্যাল টেকনোলজি",technology:"mechanical"},
{name_bn:"মোঃ মনিরুল ইসলাম",designation_bn:"চীফ ইন্সট্রাক্টর ও বিভাগীয় প্রধান (২য় শিফট)",department_bn:"পাওয়ার টেকনোলজি",technology:"power"},
{name_bn:"মোঃ আব্বাছ আলী",designation_bn:"চিফ ইন্সট্রাক্টর (নন-টেক)",department_bn:"আনুষঙ্গিক বিভাগ",technology:"other"},
{name_bn:"মোঃ আব্দুল হালিম সরকার",designation_bn:"চিফ ইন্সট্রাক্টর ও বিভাগীয় প্রধান (প্রথম শিফট)",department_bn:"ইলেকট্রিক্যাল টেকনোলজি",technology:"electrical"},
{name_bn:"মোঃ সুলতান মাহমুদ",designation_bn:"জুনিয়র ইন্সট্রাক্টর",department_bn:"মাইনিং অ্যান্ড মাইন সার্ভে টেকনোলজি",technology:"mining"},
{name_bn:"সৈয়দ মোঃ মামুনূর রশীদ",designation_bn:"চিফ ইন্সট্রাক্টর ও বিভাগীয় প্রধান (২য় শিফট)",department_bn:"ইলেকট্রনিক্স টেকনোলজি",technology:"electronics"},
{name_bn:"প্রকৌঃ মোঃ আব্দুল মালেক",designation_bn:"চিফ ইন্সট্রাক্টর ও বিভাগীয় প্রধান (প্রথম শিফট)",department_bn:"সিভিল টেকনোলজি",technology:"civil"},
{name_bn:"সাজিম মিয়া",designation_bn:"ইন্সট্রাক্টর",department_bn:"ট্যুরিজম অ্যান্ড হসপিটালিটি ম্যানেজমেন্ট",technology:"tourism"},
{name_bn:"মোঃ রেজাউল করিম",designation_bn:"চিফ ইন্সট্রাক্টর ও বিভাগীয় প্রধান (২য় শিফট)",department_bn:"রেফ্রিজারেশন এন্ড এয়ার কন্ডিশনিং টেকনোলজি",technology:"rac"},
{name_bn:"মোঃ হারুন অর রশিদ",designation_bn:"চিফ ইন্সট্রাক্টর",department_bn:"সিভিল টেকনোলজি",technology:"civil"},
{name_bn:"মান্না মেহেদি বকুল",designation_bn:"চীফ ইন্সট্রাক্টর ও বিভাগীয় প্রধান (২য় শিফট)",department_bn:"কম্পিউটার সায়েন্স এন্ড টেকনোলজি",technology:"computer"},
{name_bn:"উম্মে হাবিবা",designation_bn:"ইন্সট্রাক্টর (টেক) কম্পিউটার",department_bn:"কম্পিউটার সায়েন্স এন্ড টেকনোলজি",technology:"computer"},
{name_bn:"মোছাঃ মনিরা আকতার",designation_bn:"ইন্সট্রাক্টর ও বিভাগীয় প্রধান (১ম শিফট)",department_bn:"কম্পিউটার সায়েন্স এন্ড টেকনোলজি",technology:"computer"},
{name_bn:"মোছাঃ কামরুন নেছা",designation_bn:"ইন্সট্রাক্টর (টেক) কম্পিউটার",department_bn:"কম্পিউটার সায়েন্স এন্ড টেকনোলজি",technology:"computer"},
{name_bn:"মোঃ আমিনুল ইসলাম",designation_bn:"ইন্সট্রাক্টর (টেক) কম্পিউটার",department_bn:"কম্পিউটার সায়েন্স এন্ড টেকনোলজি",technology:"computer"},
{name_bn:"মোসাঃ মৌসুমী খাতুন",designation_bn:"ইন্সট্রাক্টর (টেক) কম্পিউটার",department_bn:"কম্পিউটার সায়েন্স এন্ড টেকনোলজি",technology:"computer"},
{name_bn:"মোঃ হুমায়ন রেজা",designation_bn:"ওয়ার্কশপ সুপারিনটেনডেন্ট (টেক)",department_bn:"কম্পিউটার সায়েন্স এন্ড টেকনোলজি",technology:"computer"},
{name_bn:"তাহরিমা ইসলাম",designation_bn:"ইন্সট্রাক্টর (টেক) কম্পিউটার",department_bn:"কম্পিউটার সায়েন্স এন্ড টেকনোলজি",technology:"computer"},
{name_bn:"রুপ কুমার সরকার",designation_bn:"জুনিয়র ইন্সট্রাক্টর (টেক/কম্পিউটার)",department_bn:"কম্পিউটার সায়েন্স এন্ড টেকনোলজি",technology:"computer"},
{name_bn:"মোঃ আয়াতুল্লাহ সিদ্দিকী",designation_bn:"জুনিয়র ইন্সট্রাক্টর (টেক/কম্পিউটার)",department_bn:"কম্পিউটার সায়েন্স এন্ড টেকনোলজি",technology:"computer"},
{name_bn:"সাজু মুহামমদ শাহজাদা",designation_bn:"চিফ ইন্সট্রাক্টর (নন-টেক)",department_bn:"আনুষঙ্গিক বিভাগ",technology:"other"},
{name_bn:"নুরউদ্দিন মোহাম্মদ আলমগীর",designation_bn:"চিফ ইন্সট্রাক্টর (নন-টেক)",department_bn:"আনুষঙ্গিক বিভাগ",technology:"other"},
{name_bn:"মোঃ সাইফুল ইসলাম",designation_bn:"ইন্সট্রাক্টর (নন-টেক)",department_bn:"আনুষঙ্গিক বিভাগ",technology:"other"},
{name_bn:"মোঃ বাবলুর রহমান",designation_bn:"ইন্সট্রাক্টর (নন-টেক), গণিত",department_bn:"আনুষঙ্গিক বিভাগ",technology:"other"},
{name_bn:"মনির হোসাইন",designation_bn:"ইন্সট্রাক্টর (নন-টেক)",department_bn:"আনুষঙ্গিক বিভাগ",technology:"other"},
{name_bn:"মানিক কুমার বর্মন",designation_bn:"ইন্সট্রাক্টর (নন-টেক)",department_bn:"আনুষঙ্গিক বিভাগ",technology:"other"},
{name_bn:"মোঃ জাহাঙ্গীর আলম",designation_bn:"ইন্সট্রাক্টর (নন-টেক)",department_bn:"আনুষঙ্গিক বিভাগ",technology:"other"},
{name_bn:"মোঃ মেহেরুল ইসলাম",designation_bn:"জুনিয়র ইন্সট্রাক্টর (নন-টেক)",department_bn:"আনুষঙ্গিক বিভাগ",technology:"other"},
{name_bn:"মোঃ আরিফুল ইসলাম",designation_bn:"জুনিয়র ইন্সট্রাক্টর (নন-টেক)",department_bn:"আনুষঙ্গিক বিভাগ",technology:"other"},
{name_bn:"মোঃ জাহিদ কবির",designation_bn:"জুনিয়র ইন্সট্রাক্টর (নন-টেক)",department_bn:"আনুষঙ্গিক বিভাগ",technology:"other"},
{name_bn:"আফরোজা নাসরিন রুনা",designation_bn:"জুনিয়র ইন্সট্রাক্টর (নন-টেক)",department_bn:"আনুষঙ্গিক বিভাগ",technology:"other"},
{name_bn:"মোঃ ইমরান হোসেন",designation_bn:"জুনিয়র ইন্সট্রাক্টর (নন-টেক/রসায়ন)",department_bn:"আনুষঙ্গিক বিভাগ",technology:"other"}
].map((x,i)=>({...x,name_en:x.name_bn,designation_en:x.designation_bn,department_en:x.department_bn,id:"official-"+i,is_published:true,sort_order:i}));
const $ = (s) => document.querySelector(s);
const escapeHTML = (v="") => String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const bnDigits = value => String(value).replace(/\d/g, d => "০১২৩৪৫৬৭৮৯"[d]);
let faculty = [...fallbackFaculty];
const normalize = v => (v || "").toLocaleLowerCase("bn").trim();
function renderFaculty() {
  const query = normalize($("#facultySearch").value);
  const department = $("#departmentFilter").value;
  const rows = faculty.filter(x => {
    const dept = x.department_bn || x.department_en || "অনুল্লেখিত";
    return (department === "all" || dept === department) &&
      [x.name_bn,x.name_en,x.designation_bn,x.designation_en,dept,x.technology]
      .some(v => normalize(v).includes(query));
  });
  $("#resultCount").textContent = bnDigits(rows.length) + " জন শিক্ষক";
  $("#facultyList").innerHTML = rows.length ? rows.map((x,i) => {
    const name = x.name_bn || x.name_en || "নাম উল্লেখ নেই";
    const designation = x.designation_bn || x.designation_en || "পদবি উল্লেখ নেই";
    const dept = x.department_bn || x.department_en || "বিভাগ উল্লেখ নেই";
    const phone = x.mobile || x.mobile_number || x.phone || "";
    return '<article class="faculty-card"><div class="serial">'+bnDigits(i+1)+'</div><div class="faculty-details"><h2>'+escapeHTML(name)+'</h2><p class="designation">'+escapeHTML(designation)+'</p><div class="meta"><span class="department"><i data-lucide="building-2"></i>'+escapeHTML(dept)+'</span>'+(phone?'<a class="phone" href="tel:'+escapeHTML(phone.replace(/[^+\d]/g,""))+'"><i data-lucide="phone"></i>'+escapeHTML(phone)+'</a>':'')+'</div></div></article>';
  }).join("") : '<div class="empty"><i data-lucide="search-x"></i><b>কোনো শিক্ষক পাওয়া যায়নি</b><p>অন্য নাম লিখুন অথবা বিভাগ পরিবর্তন করুন।</p></div>';
  if (window.lucide) lucide.createIcons();
}
function buildDepartmentOptions() {
  const select = $("#departmentFilter");
  const current = select.value || "all";
  const departments = [...new Set(faculty.map(x=>x.department_bn||x.department_en).filter(Boolean))].sort((a,b)=>a.localeCompare(b,"bn"));
  select.innerHTML = '<option value="all">সব বিভাগ</option>' + departments.map(d=>'<option value="'+escapeHTML(d)+'">'+escapeHTML(d)+'</option>').join("");
  select.value = departments.includes(current) ? current : "all";
}
async function loadFaculty() {
  renderFaculty();
  try {
    const {createClient} = await import("https://esm.sh/@supabase/supabase-js@2");
    const db = createClient(SUPABASE_URL,SUPABASE_ANON_KEY);
    const {data,error} = await db.from("bgpi_faculty").select("id,name_bn,name_en,designation_bn,designation_en,department_bn,department_en,technology,photo_url,mobile,phone,mobile_number,is_published,sort_order").eq("is_published",true).order("sort_order",{ascending:true});
    if (!error && Array.isArray(data) && data.length) {
      const merged = [...data];
      const seen = new Set(merged.map(x=>normalize(x.name_bn||x.name_en)));
      fallbackFaculty.forEach(x=>{if(!seen.has(normalize(x.name_bn||x.name_en))) merged.push(x);});
      faculty = merged;
      buildDepartmentOptions();
      renderFaculty();
    }
  } catch (e) { console.warn("Showing verified local faculty list; live directory unavailable.",e); }
}
$("#facultySearch").addEventListener("input",renderFaculty);
$("#departmentFilter").addEventListener("change",renderFaculty);
$("#clearFilters").addEventListener("click",()=>{$("#facultySearch").value="";$("#departmentFilter").value="all";renderFaculty();});
buildDepartmentOptions();
if(window.lucide) lucide.createIcons();
loadFaculty();
