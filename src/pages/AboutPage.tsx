import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Image } from '@/components/ui/image';

const MotionCard = motion(Card);

const AboutPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('duo');

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-5xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Nina & Matheus
        </motion.h1>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
          <TabsList className="grid w-full grid-cols-3 bg-white/5">
            <TabsTrigger value="duo" className="data-[state=active]:bg-white/10">Nina & Matheus</TabsTrigger>
            <TabsTrigger value="nina" className="data-[state=active]:bg-white/10">Nina</TabsTrigger>
            <TabsTrigger value="matheus" className="data-[state=active]:bg-white/10">Matheus</TabsTrigger>
          </TabsList>

          <TabsContent value="duo">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Image
                src="https://i.imgur.com/d7YjFnt.jpeg"
                alt="Nina and Matheus performing"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[400px]"
              />
              <div>
                <h2 className="text-3xl font-bold mb-4">A Dynamic Dance Duo</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Hailing from Campinas, São Paulo, Brazil, Nina and Matheus are a powerhouse duo of dance teachers, performers, and choreographers. Their official partnership began in 2018, but their collaborative journey started long before.
                  </p>
                  <p>
                    Their expertise spans Zouk, Lambada, and Forró, complemented by extensive training in Classical and Contemporary Ballet, Jazz, and Hip-Hop. This diverse background enriches their unique teaching approach.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="nina">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-3xl font-bold mb-4">Nina Darbello</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Born in 1998 in Brazil, Nina's dance journey began at age 5 with classical ballet. Her passion for movement blossomed into a multifaceted career, specializing in Zouk, Lambada, High Heels, and Lady Style.
                  </p>
                  <p>
                    Nina's approach to dance and teaching is characterized by youthful energy and creative flair. She's renowned for her exceptional musicality and expressive performances.
                  </p>
                </div>
              </div>
              <Image
                src="https://i.imgur.com/EBSkoAU.jpeg"
                alt="Nina Darbello"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[400px]"
              />
            </div>
          </TabsContent>

          <TabsContent value="matheus">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Image
                src="https://i.imgur.com/5BvLGM8.jpeg"
                alt="Matheus Franco"
                width={600}
                height={400}
                className="rounded-lg object-cover w-full h-[400px]"
              />
              <div>
                <h2 className="text-3xl font-bold mb-4">Matheus Franco</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Matheus, born in 1990, discovered his passion for dance at 13. His journey through various dance styles led him to Brazilian Zouk, where he found his true calling.
                  </p>
                  <p>
                    Now a globally recognized instructor, Matheus teaches at major Zouk and Lambada congresses worldwide. His teaching style combines technical precision with creative expression.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <motion.div variants={staggerChildren} initial="initial" animate="animate" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Classes",
              description: "Brazilian Zouk for all levels, Lady and Man Style, Performance Training",
              image: "https://i.imgur.com/0YFIBnc.jpeg"
            },
            {
              title: "DJ Services",
              description: "Professional DJ services at major Zouk events worldwide",
              image: "https://i.imgur.com/dKryOWZ.jpeg"
            },
            {
              title: "Competitions",
              description: "Official BZDC judges and competition champions",
              image: "https://i.imgur.com/pRYoUFy.jpeg"
            },
            {
              title: "Performances",
              description: "Traditional Zouk, Lambada, and Lyrical dance shows",
              image: "https://i.imgur.com/BYt8dL1.jpeg"
            }
          ].map((item, index) => (
            <MotionCard key={index} variants={fadeInUp} className="overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </CardContent>
            </MotionCard>
          ))}
        </motion.div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6">Global Impact</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              "https://i.imgur.com/0MvL2Ys.jpeg",
              "https://i.imgur.com/GLIf1mo.jpeg",
              "https://i.imgur.com/IZUyvY2.jpeg"
            ].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Dance event ${index + 1}`}
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-[300px]"
              />
            ))}
          </div>
          <div className="max-w-2xl mx-auto text-gray-300">
            <p className="mb-4">
              Nina and Matheus have performed and taught at prestigious events worldwide, including:
            </p>
            <ul className="grid md:grid-cols-2 gap-2 mb-4">
              <li>• BDF - Netherlands</li>
              <li>• Portugal Zouk Festival</li>
              <li>• Silesian Zouk Festival - Poland</li>
              <li>• Rio Zouk Congress - Brazil</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export { AboutPage };
