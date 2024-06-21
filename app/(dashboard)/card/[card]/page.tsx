'use client';

import { useParams } from 'next/navigation'
import * as Query from "query"; 

import ManaCost from "components/ManaCost";
import Need from "./components/Need";
import Have from "./components/Have";
import Match from "./components/Match";

export default function Page() {
  const params = useParams();
  const { data: card } = Query.Cards.useById({ params: { id: params.card }})
  const { data: { user } = {} } = Query.Users.useCurrent();

  const face = card?.card_faces ? card.card_faces[0] : card;

  return !card ? null : (<main className="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
    <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
      <div className="lg:col-span-7 lg:col-start-6">
        <div className="flex justify-between">
          <h1 className="text-xl font-medium text-gray-900">{card.name} <ManaCost className="inline" cost={face.mana_cost} /></h1>
          <p className="text-xl font-medium text-gray-900">$ {card.prices.usd}</p>
        </div>
        {/* Reviews */}
        {/* <div className="mt-4">
          <h2 className="sr-only">Reviews</h2>
          <div className="flex items-center">
            <p className="text-sm text-gray-700">
              {reviews.average}
              <span className="sr-only"> out of 5 stars</span>
            </p>
            <div className="ml-1 flex items-center">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    reviews.average > rating ? 'text-yellow-400' : 'text-gray-200',
                    'h-5 w-5 flex-shrink-0',
                  )}
                  aria-hidden="true"
                />
              ))}
            </div>
            <div aria-hidden="true" className="ml-4 text-sm text-gray-300">
              ·
            </div>
            <div className="ml-4 flex">
              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                See all {reviews.totalCount} reviews
              </a>
            </div>
          </div>
        </div> */}
      </div>

      {/* Image gallery */}
      <div className="mt-8 lg:col-span-5 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
        <h2 className="sr-only">Images</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
          <img
            key={card.id}
            src={card.image_uris?.large || face.image_uris?.large}
            alt={card.name}
            className="lg:col-span-2 lg:row-span-2"
          />
        </div>
      </div>
      {/* <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
        <h2 className="sr-only">Images</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
          {product.images.map((image) => (
            <img
              key={image.id}
              src={image.imageSrc}
              alt={image.imageAlt}
              className={classNames(
                image.primary ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block',
                'rounded-lg',
              )}
            />
          ))}
        </div>
      </div> */}

      <div className="mt-8 lg:col-span-7">
        <form>
          {/* Color picker */}
          {/* <div>
            <h2 className="text-sm font-medium text-gray-900">Color</h2>

            <fieldset aria-label="Choose a color" className="mt-2">
              <RadioGroup value={selectedColor} onChange={setSelectedColor} className="flex items-center space-x-3">
                {product.colors.map((color) => (
                  <Radio
                    key={color.name}
                    value={color}
                    aria-label={color.name}
                    className={({ focus, checked }) =>
                      classNames(
                        color.selectedColor,
                        focus && checked ? 'ring ring-offset-1' : '',
                        !focus && checked ? 'ring-2' : '',
                        'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none',
                      )
                    }
                  >
                    <span
                      aria-hidden="true"
                      className={classNames(
                        color.bgColor,
                        'h-8 w-8 rounded-full border border-black border-opacity-10',
                      )}
                    />
                  </Radio>
                ))}
              </RadioGroup>
            </fieldset>
          </div> */}

          {/* Size picker */}
          {/* <div className="mt-8">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-medium text-gray-900">Size</h2>
              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                See sizing chart
              </a>
            </div>

            <fieldset aria-label="Choose a size" className="mt-2">
              <RadioGroup
                value={selectedSize}
                onChange={setSelectedSize}
                className="grid grid-cols-3 gap-3 sm:grid-cols-6"
              >
                {product.sizes.map((size) => (
                  <Radio
                    key={size.name}
                    value={size}
                    className={({ focus, checked }) =>
                      classNames(
                        size.inStock ? 'cursor-pointer focus:outline-none' : 'cursor-not-allowed opacity-25',
                        focus ? 'ring-2 ring-indigo-500 ring-offset-2' : '',
                        checked
                          ? 'border-transparent bg-indigo-600 text-white hover:bg-indigo-700'
                          : 'border-gray-200 bg-white text-gray-900 hover:bg-gray-50',
                        'flex items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase sm:flex-1',
                      )
                    }
                    disabled={!size.inStock}
                  >
                    {size.name}
                  </Radio>
                ))}
              </RadioGroup>
            </fieldset>
          </div>

          <button
            type="submit"
            className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Add to cart
          </button> */}
        </form>
        {user && <div className="mt-8 flex gap-2 w-full">
          <Need card={card} user={user} />
          <Have card={card} user={user} />
        </div>}

        {/* Product details */}
        <div className="mt-10">
          <h2 className="text-sm font-medium text-gray-900">Description</h2>

          <div
            className="prose prose-sm mt-4 text-gray-500"
            dangerouslySetInnerHTML={{ __html: face.oracle_text }}
          />
        </div>
        {card.flavor_text && <div className="mt-10">
          <h2 className="text-sm font-medium text-gray-900">Flavor text</h2>

          <div
            className="prose prose-sm mt-4 text-gray-500 italic"
            dangerouslySetInnerHTML={{ __html: card.flavor_text }}
          />
        </div>}

        <Match card={card} />

        {/* <div className="mt-8 border-t border-gray-200 pt-8">
          <h2 className="text-sm font-medium text-gray-900">Fabric &amp; Care</h2>

          <div className="prose prose-sm mt-4 text-gray-500">
            <ul role="list">
              {product.details.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div> */}

        {/* Policies */}
        {/* <section aria-labelledby="policies-heading" className="mt-10">
          <h2 id="policies-heading" className="sr-only">
            Our Policies
          </h2>

          <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {policies.map((policy) => (
              <div key={policy.name} className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                <dt>
                  <policy.icon className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <span className="mt-4 text-sm font-medium text-gray-900">{policy.name}</span>
                </dt>
                <dd className="mt-1 text-sm text-gray-500">{policy.description}</dd>
              </div>
            ))}
          </dl>
        </section> */}
      </div>
    </div>

    {/* Reviews */}
    {/* <section aria-labelledby="reviews-heading" className="mt-16 sm:mt-24">
      <h2 id="reviews-heading" className="text-lg font-medium text-gray-900">
        Recent reviews
      </h2>

      <div className="mt-6 space-y-10 divide-y divide-gray-200 border-b border-t border-gray-200 pb-10">
        {reviews.featured.map((review) => (
          <div key={review.id} className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
              <div className="flex items-center xl:col-span-1">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0',
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="ml-3 text-sm text-gray-700">
                  {review.rating}
                  <span className="sr-only"> out of 5 stars</span>
                </p>
              </div>

              <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                <h3 className="text-sm font-medium text-gray-900">{review.title}</h3>

                <div
                  className="mt-3 space-y-6 text-sm text-gray-500"
                  dangerouslySetInnerHTML={{ __html: review.content }}
                />
              </div>
            </div>

            <div className="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
              <p className="font-medium text-gray-900">{review.author}</p>
              <time
                dateTime={review.datetime}
                className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
              >
                {review.date}
              </time>
            </div>
          </div>
        ))}
      </div>
    </section> */}

    {/* Related products */}
    {/* <section aria-labelledby="related-heading" className="mt-16 sm:mt-24">
      <h2 id="related-heading" className="text-lg font-medium text-gray-900">
        Customers also purchased
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {relatedProducts.map((relatedProduct) => (
          <div key={relatedProduct.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
              <img
                src={relatedProduct.imageSrc}
                alt={relatedProduct.imageAlt}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={relatedProduct.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {relatedProduct.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{relatedProduct.color}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{relatedProduct.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section> */}
  </main>);
}