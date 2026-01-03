import { Heart, Target, Shield, Users, Award, Zap, Activity, Brain, Globe } from 'lucide-react';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-purple-950 py-12 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                <img
                src="/logo.png"
                alt="Human Heart"
                className="w-15 h-16 group-hover:scale-110 transition-transform"
              />
              </div>
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            About Our Mission
          </h1>
          <p className="text-xl text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
            Empowering individuals with advanced AI-driven cardiovascular risk assessment to promote preventive healthcare and healthier lives.
          </p>
        </div>

        {/* Mission Statement Card */}
        <div className="relative group mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
          <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 hover:border-white/20 transition-all duration-300">
            <div className="flex items-start gap-4 mb-6">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl blur-lg opacity-50"></div>
                <div className="relative w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-xl flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                <p className="text-blue-100/80 text-lg leading-relaxed">
                  We believe that everyone deserves access to cutting-edge health insights. Our platform leverages machine learning and medical research to provide accurate, personalized cardiovascular risk assessments that help individuals make informed decisions about their health and wellbeing.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Shield,
              title: 'Privacy First',
              description: 'Your health data is encrypted and never stored permanently. We prioritize your privacy and security above all.',
              gradient: 'from-blue-500 to-cyan-500'
            },
            {
              icon: Brain,
              title: 'AI-Powered',
              description: 'Advanced machine learning algorithms trained on extensive medical datasets provide reliable risk assessments.',
              gradient: 'from-purple-500 to-pink-500'
            },
            {
              icon: Activity,
              title: 'Evidence-Based',
              description: 'Our models are built on peer-reviewed research and validated clinical guidelines for cardiovascular health.',
              gradient: 'from-red-500 to-orange-500'
            },
            {
              icon: Users,
              title: 'User-Centric',
              description: 'Designed with simplicity in mind, making complex health assessments accessible to everyone.',
              gradient: 'from-green-500 to-emerald-500'
            },
            {
              icon: Zap,
              title: 'Instant Results',
              description: 'Get your personalized risk assessment in seconds with actionable insights and recommendations.',
              gradient: 'from-yellow-500 to-amber-500'
            },
            {
              icon: Globe,
              title: 'Accessible',
              description: 'Free and available to everyone, anywhere, because preventive healthcare should be universal.',
              gradient: 'from-indigo-500 to-blue-500'
            }
          ].map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 h-full">
                  <div className="relative inline-block mb-4">
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-xl blur-lg opacity-50`}></div>
                    <div className={`relative w-12 h-12 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-blue-100/70 leading-relaxed">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* How It Works Section */}
        <div className="relative group mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-3xl blur-2xl opacity-50"></div>
          <div className="relative bg-slate-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Input Your Data',
                  description: 'Complete a simple 4-step form with your health information including vital signs, lifestyle factors, and medical markers.',
                  icon: Users
                },
                {
                  step: '02',
                  title: 'AI Analysis',
                  description: 'Our machine learning model processes your data instantly, comparing it against thousands of validated health profiles.',
                  icon: Brain
                },
                {
                  step: '03',
                  title: 'Get Results',
                  description: 'Receive your personalized risk assessment with clear insights, explanations, and actionable recommendations.',
                  icon: Award
                }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="relative inline-block mb-4">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-30"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {item.step}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-blue-100/70 leading-relaxed">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Disclaimer Section */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20 rounded-2xl blur-xl"></div>
          <div className="relative bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors duration-300">
            <div className="flex items-start gap-4">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 bg-amber-500 rounded-lg blur-lg opacity-30"></div>
                <div className="relative w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-white text-lg mb-3">Important Medical Disclaimer</h4>
                <p className="text-blue-100/70 leading-relaxed mb-3">
                  This tool is designed for educational and informational purposes only. It does not replace professional medical advice, diagnosis, or treatment. Always consult with qualified healthcare providers regarding any medical conditions or concerns.
                </p>
                <p className="text-blue-100/70 leading-relaxed">
                  If you experience chest pain, shortness of breath, or other symptoms of a heart condition, seek immediate medical attention.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-50"></div>
            
          </div>
        </div>
      </div>
    </div>
  );
}