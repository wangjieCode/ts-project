import { IMovie } from "../../services/MovieService";
import { ISearchCondition } from "../../services/CommonTypes";
type m =  Required<ISearchCondition>
export interface IMovieState {
	data: IMovie[],
	condition: m,
	count: number,
	isLoading:  boolean
}