export function AboutSection() {
  return (
    <section id="gioi-thieu" className="bg-bg py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative">
          <p className="text-xs font-medium uppercase tracking-[0.32em] text-accent">
            Câu chuyện
          </p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight text-fg sm:text-5xl">
            Nướng than, bàn nhỏ, thịt đúng vị Seoul
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted">
            <p>
              KAKAQ là quán BBQ Hàn theo lối hiện đại: nền tối, ánh đèn ấm, bàn
              nướng than ngay giữa — gần gũi nhưng không ồn ào.
            </p>
            <p>
              Thịt nhập mỗi sáng, thái dày vừa, ướp đúng vị. Banchan làm trong
              bếp, soju lạnh, nhạc nhỏ. Đến để ăn chậm, nướng cùng người thân.
            </p>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
            <div>
              <dt className="text-xs uppercase tracking-widest text-subtle">
                Mở cửa
              </dt>
              <dd className="mt-1 font-display text-2xl text-fg">11–23h</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-subtle">
                Bàn nướng
              </dt>
              <dd className="mt-1 font-display text-2xl text-fg">Than</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-widest text-subtle">
                Thịt
              </dt>
              <dd className="mt-1 font-display text-2xl text-fg">Mỗi ngày</dd>
            </div>
          </dl>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/images/about-interior.jpg"
              alt="Không gian tối, bàn nướng than tại KAKAQ"
              className="aspect-[4/5] w-full object-cover sm:aspect-[3/4] lg:aspect-[4/5]"
              loading="lazy"
            />
          </div>
          <p className="mt-4 text-sm text-subtle">
            Đèn vàng, bàn đá, than hồng — không gian được giữ gọn, không thừa chi tiết.
          </p>
        </div>
      </div>
    </section>
  );
}
