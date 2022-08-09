import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  adult: Boolean,
  backdrop_path: { type: String, default: null },
  belongs_to_collection: { type: String, default: null },
  budget: Number,
  genres: [{ id: Number, name: String }],
  homepage: String,
  id: Number,
  imdb_id: String,
  original_language: String,
  original_title: String,
  overview: String,
  popularity: mongoose.Types.Decimal128,
  poster_path: { type: String, default: null },
  production_companies: [
    {
      id: Number,
      logo_path: { type: String, default: null },
      name: String,
      origin_country: String,
    },
  ],
  production_countries: [{ iso_3166_1: String, name: String }],
  release_date: Date,
  revenue: Number,
  runtime: Number,
  spoken_languages: [{ iso_3166_1: String, name: String }],
  status: String,
  tagline: String,
  title: String,
  video: Boolean,
  vote_average: Number,
  vote_count: Number,
  media_type: String,
});

export const movieModel = mongoose.model('Movie', movieSchema, 'movies');

export const tvShowModel = mongoose.model('Series', movieSchema, 'series');
