/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Sword, 
  Shield, 
  Zap, 
  Package, 
  Star, 
  MapPin, 
  Phone, 
  Facebook, 
  Instagram, 
  Twitter,
  X,
  Flame,
  UtensilsCrossed,
  Scroll
} from 'lucide-react';

const COLORS = {
  deepBrown: '#2C1B12',
  gold: '#D4AF37',
  beige: '#F5F5DC',
  accent: '#8B4513',
};

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#D4AF37] selection:text-[#2C1B12]" style={{ backgroundColor: COLORS.beige, color: COLORS.deepBrown }}>
      
      {/* --- Section 1: Hero Section --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
        </div>

        {/* Magic Sparkles (Simulated with CSS) */}
        <div className="absolute inset-0 pointer-events-none z-10 opacity-30">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-200 rounded-full"
              initial={{ 
                x: Math.random() * 100 + '%', 
                y: Math.random() * 100 + '%',
                opacity: 0 
              }}
              animate={{ 
                y: [null, '-20%'],
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }}
              transition={{ 
                duration: 2 + Math.random() * 3, 
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        <div className="relative z-20 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <UtensilsCrossed className="w-16 h-16 text-[#D4AF37]" />
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
              ลิ้มรสความอร่อยระดับตำนาน... <br/>
              <span className="text-[#D4AF37]">ส่งตรงถึงปราสาทคุณภายใน 30 นาที!</span>
            </h1>
            <p className="text-lg md:text-2xl mb-10 text-gray-200 max-w-3xl mx-auto font-light italic">
              ยกระดับมื้อธรรมดาให้เป็นมื้อพิเศษ ด้วยวัตถุดิบเกรดพรีเมียมและการปรุงที่ใส่ใจเหมือนเตรียมสำรับให้ราชา
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.6)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#D4AF37] text-[#2C1B12] px-10 py-5 rounded-full text-xl font-bold flex items-center gap-3 mx-auto transition-all border-2 border-[#D4AF37] hover:bg-transparent hover:text-[#D4AF37]"
            >
              <Sword className="w-6 h-6" />
              เริ่มการผจญภัยความอร่อย คลิกสั่งเลย!
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* --- Section 2: The Problem --- */}
      <section className="py-24 bg-[#2C1B12] text-[#F5F5DC]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              เหนื่อยจากการ 'ฟาร์มงาน' มาทั้งวัน แต่ต้องมาเจอกับ...
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-left">
              {[
                { icon: "❌", text: "อาหารเดลิเวอรี่ทั่วไปที่เย็นชืดและเหี่ยวเฉา" },
                { icon: "❌", text: "รสชาติจำเจเหมือนกิน 'Common Item' ทุกวัน" },
                { icon: "❌", text: "ต้องฝ่า 'Boss' รถติดและแดดร้อนออกไปหาของกินเอง" }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: -20 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="bg-white/5 p-8 rounded-2xl border border-white/10 flex flex-col items-center text-center"
                >
                  <span className="text-4xl mb-4">{item.icon}</span>
                  <p className="text-lg">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 3: The Solution --- */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <Scroll className="w-full h-full rotate-12" />
        </div>
        <div className="container mx-auto px-6 text-center">
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.9 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#2C1B12]">
              The Gourmet Tavern: <br/>
              <span className="text-[#D4AF37]">เปลี่ยนบ้านคุณให้เป็นโรงเตี๊ยมสุดหรู</span>
            </h2>
            <p className="text-xl leading-relaxed text-[#2C1B12]/80">
              เราคัดสรรเฉพาะวัตถุดิบชั้นเลิศ ปรุงสดใหม่ทุกลำดับการสั่ง และใช้ระบบการจัดส่งที่รวดเร็วปานเวทมนตร์ 
              เพื่อให้ทุกคำที่คุณทานคือการ <strong className="text-[#D4AF37]">'Level Up'</strong> ความสุขอย่างแท้จริง
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Section 4: Features & Benefits --- */}
      <section className="py-24 bg-[#F5F5DC] border-y border-[#D4AF37]/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                icon: <Flame className="w-12 h-12 text-[#D4AF37]" />, 
                title: "Top-Tier Quality", 
                desc: "เนื้อสัตว์และผักสดส่งตรงจากฟาร์ม (Organic 100%) ไม่ใส่ผงชูรส" 
              },
              { 
                icon: <Zap className="w-12 h-12 text-[#D4AF37]" />, 
                title: "Haste Delivery", 
                desc: "ระบบคำนวณเส้นทางด้วย AI ส่งไวถึงมือในขณะที่อาหารยังร้อนกรุ่น" 
              },
              { 
                icon: <Shield className="w-12 h-12 text-[#D4AF37]" />, 
                title: "Guardian Packaging", 
                desc: "แพ็กเกจจิ้งเก็บอุณหภูมิพิเศษ แข็งแรง ทนทาน อาหารไม่หกเลอะเทอะ" 
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 30 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white p-10 rounded-3xl shadow-xl border-b-4 border-[#D4AF37] text-center"
              >
                <div className="flex justify-center mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 5: Legendary Menu --- */}
      <section className="py-24 bg-[#2C1B12]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[#D4AF37]">
            📜 Legendary Menu
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: "ข้าวหน้าเนื้อขุนนาง", 
                eng: "Imperial Beef Bowl", 
                desc: "เนื้อนุ่มละลายในปาก",
                img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
              },
              { 
                name: "สปาเกตตีเพรสโต้ป่าลึก", 
                eng: "Deep Forest Pesto", 
                desc: "กลิ่นสมุนไพรสดชื่น",
                img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80"
              },
              { 
                name: "ไก่ทอดนักรบ", 
                eng: "Warrior's Fried Chicken", 
                desc: "กรอบนอกนุ่มใน อิ่มนานตลอดคืน",
                img: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80"
              }
            ].map((menu, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-[#F5F5DC] rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="h-64 overflow-hidden">
                  <img src={menu.img} alt={menu.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-1">{menu.name}</h3>
                  <p className="text-[#D4AF37] font-mono text-sm mb-4">{menu.eng}</p>
                  <p className="text-gray-700">{menu.desc}</p>
                  <button className="mt-6 w-full py-3 border-2 border-[#2C1B12] rounded-lg font-bold hover:bg-[#2C1B12] hover:text-[#F5F5DC] transition-colors">
                    เพิ่มลงในกระเป๋าเก็บของ
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 6: Social Proof --- */}
      <section className="py-24 bg-[#F5F5DC]">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-3xl shadow-2xl relative">
            <Star className="absolute -top-6 -left-6 w-16 h-16 text-[#D4AF37] fill-[#D4AF37]" />
            <div className="text-center">
              <p className="text-2xl italic mb-8 leading-relaxed">
                "ตั้งแต่สั่งร้านนี้ ผมก็ลืมร้านอื่นไปเลย รสชาติเข้มข้น แพ็กเกจสวยมาก เหมือนได้รางวัลจากการทำเควสสำเร็จ!"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#2C1B12] flex items-center justify-center text-white font-bold text-2xl">
                  A
                </div>
                <div className="text-left">
                  <h4 className="font-bold text-xl">คุณอาร์ท</h4>
                  <p className="text-gray-500">นักศึกษาสายปั่นงาน</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 7: The Final Offer --- */}
      <section className="py-24 bg-[#D4AF37] text-[#2C1B12]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            whileInView={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              🎁 ต้อนรับนักผจญภัยหน้าใหม่!
            </h2>
            <div className="bg-[#2C1B12] text-[#F5F5DC] p-10 rounded-3xl mb-10 shadow-2xl">
              <p className="text-3xl font-bold mb-4">
                สั่งซื้อครั้งแรกวันนี้ ลดทันที <span className="text-[#D4AF37]">50 บาท</span>
              </p>
              <p className="text-xl">
                + แถมฟรี <span className="text-[#D4AF37]">"น้ำยาสมุนไพรฟื้นฟูพลัง"</span> (เครื่องดื่มสูตรพิเศษ) 1 ขวด
              </p>
            </div>
            <p className="text-2xl font-bold mb-8 flex items-center justify-center gap-2">
              <Flame className="animate-pulse" />
              จำกัดเพียง 20 ชุดต่อวันเท่านั้น!
            </p>
            <button className="bg-[#2C1B12] text-[#F5F5DC] px-12 py-6 rounded-full text-2xl font-black hover:scale-105 transition-transform shadow-xl">
              รับสิทธิ์ก่อนใคร คลิกเลย!
            </button>
          </motion.div>
        </div>
      </section>

      {/* --- Section 8: Footer --- */}
      <footer className="py-16 bg-[#2C1B12] text-[#F5F5DC]/60 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6 text-[#D4AF37]">
                <UtensilsCrossed className="w-8 h-8" />
                <span className="text-2xl font-bold">The Gourmet Tavern</span>
              </div>
              <p className="leading-relaxed">
                โรงเตี๊ยมแห่งความอร่อยที่พร้อมส่งมอบมื้ออาหารระดับตำนานถึงมือคุณ 
                ทุกเมนูปรุงด้วยเวทมนตร์แห่งความใส่ใจ
              </p>
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-6">ติดต่อเรา</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  ปทุมธานี, ประเทศไทย
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                  02-XXX-XXXX
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold text-xl mb-6">ติดตามเควสใหม่ๆ</h4>
              <div className="flex gap-4">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#2C1B12] transition-all">
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 text-center text-sm">
            © 2026 The Gourmet Tavern. All Rights Reserved. | Created for Legendary Adventurers.
          </div>
        </div>
      </footer>
    </div>
  );
}
