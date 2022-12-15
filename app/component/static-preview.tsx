const StaticPreview = () => {
  return (
    <section className="preview flex flex-col lg:items-end preview pb-20 px-4 md:px-8 xl:px-40  w-full">
      <section className="lg:w-1/2">
        <h3 className="text-pureWhite font-bold text-sm mb-8 text-center md:text-left lg:text-left leading-[40px] lg:leading-[88px]">Static Previews</h3>
      </section>
      <section className="lg:w-1/2">
        <section className="top-section mb-6">
          <section className="image"></section>
        </section>
        <section className="bottom-section">
          <section className="image"></section>
        </section>
      </section>
    </section>
  )
}

export default StaticPreview