const StaticPreview = () => {
  return (
    <section className="preview flex flex-col lg:items-end preview pb-20 px-4 md:px-8 xl:px-40  w-full">
      <div className="lg:w-1/2">
        <h3 className="text-pureWhite font-bold text-sm mb-8 text-center md:text-left lg:text-left leading-[40px] lg:leading-[88px]">Static Previews</h3>
      </div>
      <div className="lg:w-1/2">
        <div className="top-section mb-6">
          <div className="image"></div>
        </div>
        <div className="bottom-section">
          <div className="image"></div>
        </div>
      </div>
    </section>
  )
}

export default StaticPreview