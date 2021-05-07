import { formReducer, FormState } from '@components/forms/util';
import { useReducer } from 'react';

const Newsletter = () => {
  const initState: FormState = { status: 'idle', error: null };
  const [formState, dispatch] = useReducer(formReducer, initState);

  const newsletterSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT_FORM' });
    const url = '/api/newsletter/subscribe';
    const body = {
      email: e.target.email.value,
    };
    const res = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
    });
    if (res.status === 201) {
      dispatch({ type: 'SUBMIT_SUCCESS' });
      e.target.reset();
    } else {
      dispatch({
        type: 'SUBMIT_ERROR',
        payload: { err: 'Something went wrong! try again' },
      });
    }
  };

  return (
    <section className="w-full px-4 py-6 bg-gray-900">
      <div className="flex flex-col w-full gap-4 px-4 py-8 mx-auto bg-indigo-600 md:py-12 lg:grid lg:grid-cols-3 rounded-xl max-w-7xl">
        {formState.status === 'success' ? (
          <div className="col-span-3 text-center">
            <p className="text-3xl font-extrabold tracking-tight text-white">
              You're all signed up!
            </p>
            <p className="py-4 text-base text-indigo-300 md:text-lg">
              You should start getting our emails to your inbox soon!
            </p>
          </div>
        ) : (
          <>
            <div className="col-span-2 mb-4 lg:mb-0">
              <h3 className="text-3xl font-extrabold tracking-tight text-white ">
                Newsletter
              </h3>
              <p className="text-base text-indigo-100 md:text-lg">
                signup for our newsletter for updates on availability, new
                product launches & everything Tinybox
              </p>
            </div>

            <form
              className="sm:flex sm:items-center"
              onSubmit={newsletterSubmit}
            >
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 placeholder-gray-500 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white"
                placeholder="Enter your email"
              />
              <input type="hidden" value="1" name="embed" />
              <button
                type="submit"
                disabled={formState.status === 'submitting'}
                className="flex items-center justify-center w-full px-5 py-3 mt-3 text-base font-medium text-white bg-indigo-500 border border-transparent rounded-md hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0 disabled:opacity-50"
              >
                {formState.status === 'submitting'
                  ? 'Signing Up...'
                  : 'Sign up'}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
