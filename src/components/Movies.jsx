import { Movie } from './Movie';

function Movies(props) {
    const { movies = [ ] } = props;

    return (
        <div className="movies">
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) : (
                <div className='error'>
                    <div className='text-error'>Nothing found</div>
                    <div className='text-error-2'>Try another request</div>
                    <div className='image'></div>
                </div>
            )}
        </div>
    );
}

export { Movies };